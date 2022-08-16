import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSettings, FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { updateSetting } from "../../redux-store/authStore";

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
  const dispatch=useDispatch()
  const classes = useStyles();
  const {data, isLoading, editLoading}=useSelector(s=>s.auth)
  const {setting}=data
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    focusInterval:Number(setting.focusInterval),
    focusMode:Boolean(setting.focusMode),
    scheduleUpload:Boolean(setting.scheduleUpload),
    chatNotication:Boolean(setting.chatNotication),
    commentNotication:Boolean(setting.commentNotication),
    likeNotication:Boolean(setting.likeNotication),
    shareNotication:Boolean(setting.shareNotication),
    followNotication:Boolean(setting.followNotication),
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    dispatch(updateSetting(formData))
  }
 
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
                    <input type="checkbox" className="toggle toggle-accent"
                      checked={formData.focusMode}
                      onChange={e=>setFormData({...formData,focusMode:!formData.focusMode})}
                    />
                  </label>
                </div>
                {formData.focusMode && (
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Focus Mode Interval</span>
                    <input type="number" className="border px-1" placeholder="In minutes" 
                      value={formData.focusInterval}
                      onChange={e=>setFormData({...formData,focusInterval:Number(e.target.value)})}
                    />
                  </label>
                </div>
                )}
                
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Schedule Upload</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.scheduleUpload}
                onChange={e=>setFormData({...formData,scheduleUpload:!formData.scheduleUpload})}
                />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Follow Notication</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.followNotication}
                      onChange={e=>setFormData({...formData,followNotication:!formData.followNotication})}
                      />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Comment Notication</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.commentNotication}
                      onChange={e=>setFormData({...formData,commentNotication:!formData.commentNotication})}
                      />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Share Notication</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.shareNotication}
                      onChange={e=>setFormData({...formData,shareNotication:!formData.shareNotication})}
                      />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Like Notication</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.likeNotication}
                      onChange={e=>setFormData({...formData,likeNotication:!formData.likeNotication})}
                      />
                  </label>
                </div>
                <div className="form-control border rounded mb-1">
                  <label className="label cursor-pointer">
                    <span className="label-text text-base pl-2">Chat Notication</span>
                    <input type="checkbox" className="toggle toggle-accent" 
                      checked={formData.chatNotication}
                      onChange={e=>setFormData({...formData,chatNotication:!formData.chatNotication})}
                      />
                  </label>
                </div>
              </div>
              <button class={`${editLoading?"loading":""} btn btn-block mt-3`} onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
