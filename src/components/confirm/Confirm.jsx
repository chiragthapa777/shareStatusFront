import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:"3px",
  },
}));

export default function Confirm(props) {
    const {buttonText, text, actionFunc}=props
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleYes = () =>{
    handleClose()
    actionFunc()
  }

  return (
    <div>
      <button className='' onClick={handleOpen}>
        {buttonText}
      </button>
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
            <p className='text-lg'>{text}</p>
            <div className='w-full mt-3 flex justify-around'>
                <button className='btn btn-error btn-sm px-10' onClick={handleClose}>No</button>
                <button className='btn btn-success btn-sm px-10' onClick={handleYes}>Yes</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
