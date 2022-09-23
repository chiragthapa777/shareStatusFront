import { url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";
let initial = {
  isLoading: false,
  isError: false,
  isSuccess: true,
  message: "",
  notifications: []
};
export const notificationReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_NOTIFICATION": {
      return { ...state, notifications: action.payload };
    }
    case "SET_NOTIFICATION": {
      return { ...state, notifications: [ action.payload,...state.notifications ]};
    }
    case "UPDATE_SEEN": {
      let users=state.notifications.map(n=>{
        return {...n, seen:true}
      })
      return { ...state, notifications: users};
    }
    case "SET_SUCCESS_NOTIFY":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_NOTIFY":
      return { ...state, isLoading: action.payload };
    case "SET_UL_LOADING_NOTIFY":
      return { ...state, isUserListLoading: action.payload };
    case "SET_SEND_LOADING_NOTIFY":
      return { ...state, isSendLoading: action.payload };
    case "SET_ERROR_NOTIFY":
      return { ...state, isError: action.payload };
    case "SET_MESSAGE_NOTIFY":
      return { ...state, message: action.payload };
    case "SET_CMT_LOAD_NOTIFY":
      return { ...state, isCmtLoading: action.payload };
    default:
      return state;
  }
};

export const getNotifications = (id) => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while fetching notification",
      null,
      null,
      "CHAT"
    );
    axios
      .get(`${url}/notication`)
      .then((res) => {
        dispatcher(dispatch, false, "", null, null, "NOTIFY");
        dispatch({
          type: "GET_NOTIFICATION",
          payload: res.data.data,
        });
      })
      .catch((error) => {
        toast.error(
          `${
            error?.response?.data?.data
              ? error.response.data.data
              : "cannot fetch notification"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "NOTIFY"
        );
      });
  };
};

export const setNotifications = (message) => {
  console.log("todo notification fixes")
//  return (dispatch) => {
//     toast.info(`${message?.notication}`, {
//       position: "top-right",
//       autoClose: 5000,
//     });
//     console.log(message)
//     // todo : notification set
//     dispatch({
//         type: "SET_NOTIFICATION",
//         payload: message,
//       });
//     }
}

export const updateNotification = () => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while fetching notification",
      null,
      null,
      "CHAT"
    );
    axios
      .post(`${url}/notication`)
      .then((res) => {
        dispatch({
          type: "UPDATE_SEEN"
        });
      })
      .catch((error) => {
        console.log(error?.message)
      });
  };
}
