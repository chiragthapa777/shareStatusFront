import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSettings, FiX } from "react-icons/fi";
import Users from "../user/Users";

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

export default function UserSetting() {
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
      <button className="btn btn-ghost btn-sm" onClick={handleOpen}>
        User setting
        <FiSettings className="text-lg ml-1" />
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
              <h1 className="text-slate-600 font-bold capitalize text-2xl mb-2">
                User setting
              </h1>
              <div className="w-[400px]">
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Focus Mode</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Focus Mode Interval</span>
                    <input type="number" class="border px-1" placeholder="In minutes" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Schedule Upload</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Follow Notication</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Comment Notication</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Share Notication</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Like Notication</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Chat Notication</span>
                    <input type="checkbox" class="toggle toggle-accent" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
