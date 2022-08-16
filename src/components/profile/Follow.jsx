import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSettings, FiX } from "react-icons/fi";
import Users from "../user/Users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux-store/userStore";
import { Link } from "react-router-dom";

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

export default function Follow({ type, data }) {
  const dispatch = useDispatch();
  const users = useSelector((s) => s.users);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    url: "https://placeimg.com/192/192/people",
  });
  const [formData, setFormData] = useState({});
  const handleOpen = () => {
    // dispatch(setUsers(data[type], type))
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
      <div className="indicator">
        <span className="indicator-item badge badge-primary">
          {type === "following"
            ? data?.following?.length
            : data?.follower?.length}
        </span>
        <button className="btn btn-ghost btn-sm" onClick={handleOpen}>
          {type}
        </button>
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
              <h1 className="text-slate-600 font-bold capitalize text-2xl mb-2">
                {type}
              </h1>
              <div className="w-[400px] max-h-[500px] overflow-auto">
                {data &&
                  data[type]?.map((user) => {
                    return (
                      <div
                        key={user[type==="following"?type:"user"].id}
                        className="w-full flex justify-between items-center bg-slate-100 p-1 cursor-pointer mb-1 hover:bg-slate-200 rounded-md "
                      >
                        <Link to={`/profile/${user[type==="following"?type:"user"].id}`} className="flex">
                          <div className="avatar">
                            <div className="w-8 my-auto rounded-full">
                              <img
                                src={
                                  user[type==="following"?type:"user"]?.image?.url
                                    ? user[type==="following"?type:"user"].image
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-col ml-2">
                            <p className="text-sm">{user[type==="following"?type:"user"].name}</p>
                            <p className="text-xs font-thin">{user[type==="following"?type:"user"].email}</p>
                          </div>
                        </Link>
                        {/* <div>
                          <button
                            // onClick={() => handleFollow(user)}
                            className="btn btn-ghost btn-xs text-green-500"
                          >
                            {data?.following?.find(
                              (u) => u?.followingId === user[type==="following"?type:"user"]?.id
                            )
                              ? "unfollow"
                              : "follow"}
                          </button>
                        </div> */}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
