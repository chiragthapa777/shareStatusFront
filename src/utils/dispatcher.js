//supporter function
export const dispatcher = (dispatch, load, message, error, success,suffix) => {
    if (load !== null) {
      dispatch({
        type: "SET_LOADING_"+suffix,
        payload: load,
      });
    }
    if (message !== null) {
      dispatch({
        type: "SET_MESSAGE_"+suffix,
        payload: message,
      });
    }
    if (success !== null) {
      dispatch({
        type: "SET_SUCESS_"+suffix,
        payload: success,
      });
    }
    if (error !== null) {
      dispatch({
        type: "SET_ERROR_"+suffix,
        payload: error,
      });
    }
  };