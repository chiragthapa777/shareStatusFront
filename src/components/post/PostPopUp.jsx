import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Postcard from "./Postcard";
import { url } from "../../api/url";
import axios from "axios";
import Loader from "../loader/loadComp/Loader";
import { toast } from "react-toastify";

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
    borderRadius: "3px",
  },
}));

export default function PostPopUp(props) {
  const { postId, buttonText } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [post, setpost] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
    setisLoading(true);
    axios
      .get(`${url}/post/${postId}`)
      .then((res) => {
        setisLoading(false);
        setpost(res.data.data);
      })
      .catch((err) => {
        setisLoading(false);
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot load post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className="text-blue-700 underline text-xs p-1" onClick={handleOpen}>
        {buttonText}
      </h1>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {isLoading}
            {isLoading ? (
              <div className="">
                <Loader />{" "}
              </div>
            ) : (
                post &&
              <Postcard post={post} />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
