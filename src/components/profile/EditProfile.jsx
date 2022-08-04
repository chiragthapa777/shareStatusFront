import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSettings, FiX } from "react-icons/fi";

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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    url: "https://placeimg.com/192/192/people",
  });
  const [formData, setFormData] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                  <div class="form-control w-full mb-1">
                    <label class="label">
                      <span class="label-text">Name :</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Tags separated by comma"
                      className="input w-full bg-slate-100"
                    />
                  </div>
                  {/* bio */}
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Bio :</span>
                    </label>
                    <textarea
                      class="textarea w-full h-28 bottom-1 bg-slate-100 mb-2 text-md resize-none"
                      placeholder="Update your Bio"
                    ></textarea>
                  </div>
                 
                  <div className="">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-base">
                          Active :
                        </span>
                        <input type="checkbox" class="toggle toggle-accent" />
                      </label>
                    </div>
                  </div>
                  <div class="form-control w-full mb-1">
                    <label class="label">
                      <span class="label-text">Change Profile :</span>
                    </label>
                    <input
                    type="file"
                    placeholder="Type here"
                    class="input w-full max-w-xs"
                  />
                  </div>
               
                </div>
                {/* right */}
                {image.url !== "" && (
                  <div className="flex-1 min-w-[350px] ml-3">
                    <img
                      className="w-[400px] h-[400px] object-cover mb-2 rounded-md"
                      src={image.url}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <button className="btn w-full" onClick={handleUpload}>
                Update
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
