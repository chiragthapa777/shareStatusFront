import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiEdit, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost, setEditContent } from "../../redux-store/postStore";
import { url } from "../../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../loader/loadComp/Loader";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditPost(props) {
  const { postContent } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imageLoading, setimageLoading] = useState(false);
  let { posts, isLoading, message, isSuccess, editPostContent } = useSelector(
    (state) => state.post
  );
  const [post, setPost] = useState({
    status: postContent?.status ? postContent.status : "",
    tags:
      postContent?.tags
        ?.map((t) => (t?.tag?.tag ? t.tag.tag : ""))
        .toString() || "",
    imageId: postContent?.imageId ? postContent.imageId : null,
  });
  const [fakeimg, setfakeimg] = useState(postContent?.image?.url ? postContent.image.url : null);

  const onImageChange = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    setimageLoading(true);
    axios
      .post(`${url}/upload/postimage`, data)
      .then((res) => {
        setimageLoading(false);
        setPost({ ...post, imageId: res.data.data.id });
      })
      .catch((err) => {
        toast.error(`${err.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
        setimageLoading(false);
      });
    const [file] = e.target.files;
    setfakeimg(URL.createObjectURL(file));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (post.status || post.imageId || post.tags) {
      if (window.confirm("Are your sure you want to close")) {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };

  const handleUpload = () => {
    if (!post.status) {
      toast.info(`Status cannot be empty`, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      dispatch(editPost(post,postContent.id));
      setPost({ status: "", tags: "", imageId: "" });
      setfakeimg(null);
      setimageLoading(false);
    }
  };

  const handleLoadEditContent = () => {
    handleOpen();
    dispatch(setEditContent(postContent));
  };
  
  const handleRemoveImage = () => {
    setPost({...post,imageId:"remove"})
    setfakeimg(null);
  }

  useEffect(() => {
    if (message === "Uploaded") {
      setOpen(false);
    }
  }, [message]);
  return (
    <div>
      <div
        className="flex justify-centre items-center text-green-600"
        onClick={handleLoadEditContent}
      >
        <FiEdit className="text-lg mr-3" />
        Edit
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* close button */}
            <div className="relative">
              <FiX
                className="bg-red-600 text-white font-bold text-3xl absolute right-[-15px] rounded-full p-1 hover:bg-red-400 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            {/* form content */}
            <div className=" max-h-[100vh] pt-2">
              <h1 className="text-slate-600 font-bold	text-2xl mb-2">
                Edit Post
              </h1>
              <div className="w-full flex ">
                {/* left */}
                <div className="flex-1 min-w-[350px] mr-2">
                  <textarea
                    className="textarea w-full h-28 bottom-1 bg-slate-100 mb-2 text-md resize-none"
                    placeholder="Write your status"
                    value={post.status}
                    onChange={(e) => {
                      setPost({ ...post, status: e.target.value });
                    }}
                  ></textarea>
                  <div className="form-control w-full mb-1">
                    <input
                      type="text"
                      placeholder="Tags separated by comma"
                      className="input w-full bg-slate-100"
                      value={post.tags}
                      onChange={(e) => {
                        setPost({ ...post, tags: e.target.value });
                      }}
                    />
                    <label className="label">
                      <span className="label-text-alt text-slate-400">
                        Example : fun,travel world,explore
                      </span>
                    </label>
                  </div>
                  <button className="btn btn-xs bg-red-500 mb-2 ml-1" onClick={handleRemoveImage}>Remove Image</button>
                  <input
                    type="file"
                    placeholder="add Image"
                    className="input w-full max-w-xs"
                    accept=".png, .jpg, .jpeg"
                    onChange={onImageChange}
                  />
                </div>
                {/* right */}
                {fakeimg && (
                  <div className="flex-1 min-w-[350px]">
                    {imageLoading && (
                      <div className="bg-slate-200 opacity-30 absolute flex justify-center items-center w-[400px] h-[400px]">
                        <Loader />
                      </div>
                    )}
                    <img
                      className="w-[400px] h-[400px] object-cover mb-2 rounded-md"
                      src={fakeimg}
                      alt=""
                    />
                  </div>
                )}
              </div>

              <button
                className={`btn w-full ${
                  imageLoading || isLoading ? "loading" : ""
                }`}
                onClick={handleUpload}
              >
                {message ? message : "Update"}
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
