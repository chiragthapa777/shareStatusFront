import { url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";
import { ioUrl } from "../api/url";
import { io } from "socket.io-client";

let initial = {
  isLoading: false,
  isError: false,
  isSuccess: true,
  isCmtLoading: false,
  message: "",
  users: [],
  onlineUsers:[]
};
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    case "SET_USERS": {
      return { ...state, users: action.payload };
    }
    case "ADD_ONLINE_USER": {
      /**
       * {userId: 2, socketId: 'iD7VAyQdmPernJ0HAAAf'}
       */
      return { ...state, onlineUsers: action.payload};
    }
    case "CLEAR_USER": {

      return { ...state, users:[]};
    }
    case "SET_SUCCESS_NOTIFY":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_NOTIFY":
      return { ...state, isLoading: action.payload };
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

export const getUsers = (options) => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while fetching users",
      null,
      null,
      "USER"
    );
    axios
      .get(`${url}/user?search=${options.search}&take=${options.take}`)
      .then((res) => {
        dispatcher(dispatch, false, "", null, null, "USER");
        dispatch({
          type: "GET_USERS",
          payload: res.data.data,
        });
      })
      .catch((error) => {
        toast.error(
          `${
            error?.response?.data?.data
              ? error.response.data.data
              : "cannot fetch users"
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
          "USER"
        );
      });
  };
};

export const setUsers = (data, type) => {
  let idArr = "";
  for (const i in data) {
    idArr += data[i][type==="following"?type:"user"]?.id.toString();
    if (i < data.length - 1) {
      idArr += ",";
    }
  }
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while fetching users",
      null,
      null,
      "USER"
    );
    axios
      .get(`${url}/user?ids=${idArr}`)
      .then((res) => {
        dispatcher(dispatch, false, "", null, null, "USER");
        dispatch({
          type: "GET_USERS",
          payload: res.data.data,
        });
      })
      .catch((error) => {
        toast.error(
          `${
            error?.response?.data?.data
              ? error.response.data.data
              : "cannot fetch users"
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
          "USER"
        );
      });
  };
};

export const getOnlineUser=(obj)=>{
  //make a api
  return(dispatch)=>{
    dispatch({
      type: "ADD_ONLINE_USER",
      payload: obj,
    });
  }
}

export const clearUsers=()=>{
  //make a api
  return(dispatch)=>{
    dispatch({
      type: "CLEAR_USER"
    });
  }
}
