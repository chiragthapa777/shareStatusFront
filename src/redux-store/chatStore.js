import { url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";
//socket
import { io } from "socket.io-client";
import {ioUrl} from "../api/url"

    



let initial = {
  isLoading: false,
  isUserListLoading:false,
  isSendLoading:false,
  isError: false,
  isSuccess: true,
  isCmtLoading: false,
  message: "",
  chats: [],
  userLists:[]
};
export const chatReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_CHATS": {
      return { ...state, chats: action.payload };
    }
    case "SEND_CHATS": {
      return { ...state, chats: [...state.chats, action.payload ]};
    }
    case "GET_USERLIST": {
      return { ...state, userLists: action.payload };
    }
    case "RECEIVE_CHAT": {
      console.log("mildaixaa",action.payload)
      let chats=state.chats
      if(!chats.find(i=>i.id===action.payload.id)){
        console.log("vetyooo", action.payload)
        chats=[...state.chats,action.payload]
      }
      return { ...state, chats:chats };
    }
    case "SET_SUCCESS_CHAT":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_CHAT":
      return { ...state, isLoading: action.payload };
    case "SET_UL_LOADING_CHAT":
      return { ...state, isUserListLoading: action.payload };
    case "SET_SEND_LOADING_CHAT":
      return { ...state, isSendLoading: action.payload };
    case "SET_ERROR_CHAT":
      return { ...state, isError: action.payload };
    case "SET_MESSAGE_CHAT":
      return { ...state, message: action.payload };
    case "SET_CMT_LOAD_CHAT":
      return { ...state, isCmtLoading: action.payload };
    default:
      return state;
  }
};

export const getChats = (id) => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while fetching chats",
      null,
      null,
      "CHAT"
    );
    axios
      .get(`${url}/chat/${id}`)
      .then((res) => {
        dispatcher(dispatch, false, "", null, null, "CHAT");
        dispatch({
          type: "GET_CHATS",
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
          "CHAT"
        );
      });
  };
};

export const getUserLists = () => {
  return (dispatch) => {
    dispatch({
        type: "SET_UL_LOADING_CHAT",
        payload: true,
      });
    axios
      .get(`${url}/chat/userlists`)
      .then((res) => {
        dispatch({
            type: "SET_UL_LOADING_CHAT",
            payload: false,
          });
        dispatch({
          type: "GET_USERLIST",
          payload: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({
            type: "SET_UL_LOADING_CHAT",
            payload: false,
          });
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
        )
      });
  };
};

export const sendChats = (message,receiverId, userId) => {
  const socket=io(ioUrl)
  let userArr=[receiverId,userId]
  userArr.sort((a,b)=>a-b)
  const room=userArr.join("and")
  console.log(room)
  return (dispatch) => {
    dispatch({
        type: "SET_SEND_LOADING_CHAT",
        payload: true,
      });
    axios
      .post(`${url}/chat`,{message,receiverId})
      .then((res) => {
        dispatch({
            type: "SET_SEND_LOADING_CHAT",
            payload: false,
          });
        dispatch({
          type: "SEND_CHATS",
          payload: res.data.data,
        });
        socket.emit('send-message',res.data.data,room)
      })
      .catch((error) => {
        dispatch({
            type: "SET_SEND_LOADING_CHAT",
            payload: false,
          });
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
      });
  };
};

export const receiveChats = (message) => {
  return (dispatch) => {
    dispatch({
        type: "RECEIVE_CHAT",
        payload: message,
      });
    }
}
