import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSettings, FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { url } from "../../api/url";
import Loader from "../loader/loadComp/Loader";
import { updateProfile } from "../../redux-store/authStore";

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

export default function EditProfile() {
  const dispatch = useDispatch();
  const [imageLoading, setimageLoading] = useState(false);
  const { isLoading, data, message, editLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: data?.name ? data.name : "",
    bio: data?.bio ? data.bio : "",
    imageId: data.imageId,
    active: Boolean(data.active),
  });
  const [fakeimg, setfakeimg] = useState(
    data?.image?.url
      ? data.image.url
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const onImageChange = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    setimageLoading(true);
    axios
      .post(`${url}/upload/userImage`, data)
      .then((res) => {
        setimageLoading(false);
        setFormData({ ...formData, imageId: res.data.data.id });
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

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = () => {
    dispatch(updateProfile(formData))
  };
  return (
    <div>
      <button
        className="btn btn-ghost btn-circle text-[1.65rem]"
        onClick={handleOpen}
      >
        <div className="tooltip tooltip-bottom capitalize" data-tip="add post">
          <FiSettings />
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
                Edit Profile
              </h1>
              <div className="w-full flex ">
                {/* left */}
                <div className="flex-1 min-w-[350px] mr-2">
                  {/* Name */}
                  <div className="form-control w-full mb-1">
                    <label className="label">
                      <span className="label-text">Name :</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      placeholder="Name"
                      className="input w-full bg-slate-100"
                    />
                  </div>
                  {/* bio */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Bio :</span>
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => {
                        setFormData({ ...formData, bio: e.target.value });
                      }}
                      className="textarea w-full h-28 bottom-1 bg-slate-100 mb-2 text-md resize-none"
                      placeholder="Update your Bio"
                    ></textarea>
                  </div>

                  <div className="">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-base">Active :</span>
                        <input
                          checked={Boolean(formData.active)}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              active: !formData.active,
                            });
                          }}
                          type="checkbox"
                          className="toggle toggle-accent"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="form-control w-full mb-1">
                    <label className="label">
                      <span className="label-text">Change Profile :</span>
                    </label>
                    <input
                      type="file"
                      placeholder="add Image"
                      className="input w-full max-w-xs"
                      accept=".png, .jpg, .jpeg"
                      onChange={onImageChange}
                    />
                  </div>
                </div>
                {/* right */}

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
              </div>
              <button className={`btn w-full ${imageLoading || isLoading || editLoading ? "loading":""}`} onClick={handleUpload}>
                Save
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
