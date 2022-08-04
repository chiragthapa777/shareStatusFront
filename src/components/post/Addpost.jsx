import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiPlusCircle, FiX } from "react-icons/fi";

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

export default function AddPost() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    url: "https://placeimg.com/192/192/people",
  });
  const [formData, setFormData] = useState({
    schedule:false
  });
  const [post, setPost] = useState({
    status: "",
    imageId: null,
    tags: "",
  });

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
    setOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-ghost btn-circle text-[1.65rem]"
        onClick={handleOpen}
      >
        <div className="tooltip tooltip-bottom capitalize	" data-tip="add post">
          <FiPlusCircle />
        </div>
      </button>
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
                Add Post
              </h1>
              <div className="w-full flex ">
                {/* left */}
                <div className="flex-1 min-w-[350px] mr-2">
                  <textarea
                    class="textarea w-full h-28 bottom-1 bg-slate-100 mb-2 text-md resize-none"
                    placeholder="Write your status"
                    value={post.status}
                    onChange={(e) => {
                      setPost({ ...post, status: e.target.value });
                    }}
                  ></textarea>
                  <div class="form-control w-full mb-1">
                    <input
                      type="text"
                      placeholder="Tags separated by comma"
                      className="input w-full bg-slate-100"
                      value={post.tags}
                      onChange={(e) => {
                        setPost({ ...post, tags: e.target.value });
                      }}
                      />
                    <label class="label">
                      <span class="label-text-alt text-slate-400">
                        Example : fun,travel world,explore
                      </span>
                    </label>
                      </div>
                    <div className="">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text text-base">
                            Schdeule Post
                          </span>
                          <input
                            type="checkbox"
                            class="toggle toggle-accent"
                            checked={formData.schedule}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                schedule: !formData.schedule,
                              });
                            }}
                          />
                        </label>
                      </div>
                    </div>
                    {formData.schedule && (
                      <div className="mb-2 w-full flex px-1">
                        <div className="flex-1 mr-2 ">
                          <h1 className="my-1 ">Date</h1>
                          <input
                            type="datetime-local"
                            placeholder="Type here"
                            class="input w-full border-slate-300"
                          />
                        </div>
                      </div>
                    )}
                  <input
                    type="file"
                    placeholder="Type here"
                    class="input w-full max-w-xs"
                  />
                </div>
                {/* right */}
                {image.url !== "" && (
                  <div className="flex-1 min-w-[350px]">
                    <img
                      className="w-[400px] h-[400px] object-cover mb-2 rounded-md"
                      src={image.url}
                      alt=""
                    />
                  </div>
                )}
              </div>

              <button className="btn w-full" onClick={handleUpload}>
                Upload
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
