import { ioUrl, url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";
import { io } from "socket.io-client";

// Reducers
const getToken = () => {
  let token = localStorage.getItem("token");
  if (token === null) {
    token = "";
  }
  return token;
};

let initial = {
  isLoading: false,
  editLoading: false,
  isError: false,
  isSuccess: true,
  socketId:"",
  message: "",
  isAuth:false,
  data: {
    id: "",
    name: "",
    email: "",
    bio: "",
    imageId: null,
    following: [],
    setting: {},
    follower: [],
    image: {},
    active: false,
    createdAt: "",
    UpdatedAt: "",
  },
};

export const authUserReducer = (state = initial, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...initial,
        isAuth:true,
        data: {
          ...action.user.data.data,
        },
      };
    case "LOGIN_USER": {
      return {
        ...state,
        token: getToken(),
        isAuth:true,
        data: {
          ...action.res.user,
        },
      };
    }
    case "LOGOUT_USER": {
      const socket=io(ioUrl)
      socket.emit("leave-room",state.socketId+"_room")
      return {
        ...initial,
      };
    }
    case "EDIT_USER":
      return {
        ...initial,
        data: {
          ...action.user.data.data,
        },
      };
    case "EDIT_USER_SETTING":
      return {
        ...state,
        data: {
          ...state.data,
          setting: { ...action.user.data.data },
        },
      };
    case "FOLLOW": {
      return {
        ...state,
        token: getToken(),
        data: {
          ...state.data,
          following: [...action.payload],
        },
      };
    }
    case "UN_FOLLOW": {
      return {
        ...state,
        token: getToken(),
        data: {
          ...state.data,
          following: state.data.following.filter(
            (u) => u.followingId !== action.payload
          ),
        },
      };
    }
    case "SET_SOCKET_ID":
      console.log(action.payload)
      return { ...state, socketId: action.payload };
    case "SET_SUCCESS_AUTH":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_AUTH":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR_AUTH":
      return { ...state, isError: action.payload };
    case "SET_MESSAGE_AUTH":
      return { ...state, message: action.payload };
    case "SET_EDIT_LOADING_AUTH":
      return { ...state, editLoading: action.payload };
    default:
      return state;
  }
};

//Actions

export const loadAuth = () => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while loading user",
      null,
      null,
      "AUTH"
    );
    axios
      .get(`${url}/auth`)
      .then((user) => {
        dispatcher(dispatch, false, "", null, null, "AUTH");
        dispatch({
          type: "LOAD_USER",
          user,
        });
      })
      .catch((error) => {
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "AUTH"
        );
        // toast.error(`Cannot load user : ${error.response?.data.data}`, {
        //   position: "top-right",
        //   autoClose: 5000,
        // });
      });
  };
};

export const loginAuth = ({ email, password }) => {
  return (dispatch) => {
    dispatcher(dispatch, true, "Please wait loggin in", null, null, "AUTH");
    axios
      .post(`${url}/auth/login`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatcher(
          dispatch,
          false,
          `Login in as ${res.data.data.user.name}`,
          false,
          true,
          "AUTH"
        );
        toast.info(`Login in as ${res.data.data.user.name}`, {
          position: "top-right",
          autoClose: 5000,
        });
        dispatch({
          type: "LOGIN_USER",
          res: res.data.data,
        });
      })
      .catch((err) => {
        dispatcher(dispatch, false, "", null, null, "AUTH");
        toast.error(`Cannot login : ${err.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
};

export const registerAuth = (name, email, password) => {
  return (dispatch) => {
    dispatcher(dispatch, true, "Please wait loggin in", null, null, "AUTH");
    axios
      .post(`${url}/auth/register`, { name, email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        toast.info(`Login in as ${res.data.data.user.name}`, {
          position: "top-right",
          autoClose: 5000,
        });
        dispatcher(
          dispatch,
          false,
          `Login in as ${res.data.name}`,
          false,
          true,
          "AUTH"
        );
        dispatch({
          type: "LOGIN_USER",
          res: res.data.data,
        });
      })
      .catch((err) => {
        dispatcher(dispatch, false, "", null, null, "AUTH");
        toast.error(`${err.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
};

export const logoutAuth = (name) => {
      
  return (dispatch) => {
    toast.info(`Logging out ${name}`, {
      position: "top-right",
      autoClose: 5000,
    });
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT_USER",
    });
  };
};

export const followAuth = (mode, user) => {
  return (dispatch) => {
    axios
      .post(`${url}/follow`, { id: user.id })
      .then((res) => {
        if (mode === "follow") {
          //dispatch payload ma user
          dispatch({
            type: "FOLLOW",
            payload: res.data.data,
          });
        } else {
          //dispatch payload ma user id
          dispatch({
            type: "UN_FOLLOW",
            payload: user.id,
          });
        }
      })
      .catch((error) => {
        toast.error(`${error.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
};

export const updateProfile = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_EDIT_LOADING_AUTH",
      payload: true,
    });
    axios
      .put(`${url}/auth`, data)
      .then((user) => {
        dispatch({
          type: "EDIT_USER",
          user,
        });
        dispatch({
          type: "SET_EDIT_LOADING_AUTH",
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SET_EDIT_LOADING_AUTH",
          payload: false,
        });
        toast.error(`${error.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
};

export const updateSetting = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_EDIT_LOADING_AUTH",
      payload: true,
    });
    axios
      .put(`${url}/usersetting`, data)
      .then((user) => {
        dispatch({
          type: "EDIT_USER_SETTING",
          user,
        });
        dispatch({
          type: "SET_EDIT_LOADING_AUTH",
          payload: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: "SET_EDIT_LOADING_AUTH",
          payload: false,
        });
        toast.error(`${error.response.data.data}`, {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
};

export const setSocketId=(id)=>{
  console.log("socket id chnaged : ",id)
  return(dispatch)=>{
    dispatch({
      type:"SET_SOCKET_ID",
      payload:id
    })
  }
}
