import { url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";

let initial = {
  isLoading: false,
  isError: false,
  isSuccess: true,
  isCmtLoading: false,
  message: "",
  users: [],
};
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    case "SET_USERS": {
      return { ...state, users: action.payload };
    }
    case "SET_SUCCESS_USER":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_USER":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR_USER":
      return { ...state, isError: action.payload };
    case "SET_MESSAGE_USER":
      return { ...state, message: action.payload };
    case "SET_CMT_LOAD_USER":
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
  console.log("======>", data);
  let idArr = "";
  for (const i in data) {
    console.log(data[i][type].id.toString())
    idArr += data[i][type].id.toString();
    if (i < data.length - 1) {
      idArr += ",";
    }
  }
  console.log(idArr)
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
