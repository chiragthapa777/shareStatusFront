import { url } from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import { dispatcher } from "../utils/dispatcher";
import {moment} from "moment"
let initial = {
  isLoading: false,
  isError: false,
  isSuccess: true,
  isCmtLoading: false,
  message: "",
  posts: [],
  editPostContent:{}
};
export const postReducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_HOME_POST": {
      return { ...state, posts: action.payload.data };
    }
    case "ADD_POST": {
      return { ...state, posts: [action.payload, ...state.posts] };
    }
    case "CLEAR_POST":{
      return { ...state, posts: [] };
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return { ...post, comments: [action.payload, ...post.comments] };
          } else {
            return post;
          }
        }),
      };
    }
    case "ADD_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              likes: [action.payload.likeObj, ...post.likes]
            };
          } else {
            return post;
          }
        }),
      };
    }
    case "REMOVE_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              likes: post.likes.filter(obj=>obj.user.id!==action.payload.likerId)
            };
          } else {
            return post;
          }
        }),
      };
    }
    case "SHARE": {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              shares: [action.payload.likeObj, ...post.shares]
            };
          } else {
            return post;
          }
        }),
      };
    }
    case "UN_SHARE": {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              shares: post.shares.filter(obj=>obj.user.id!==action.payload.likerId)
            };
          } else {
            return post;
          }
        }),
      };
    }
    case "EDIT_POST_CONTENT":{
      return {
        ...state,
        editPostContent:{
          ...action.payload
        }
      }
    }
    case "EDIT_POST":{
      return{
        ...state,
        posts:state.posts.map(p=>{
          if(p.id===action.payload.id){
            return action.payload
          }
          else{
            return p
          }
        })
      }
    }
    case "DELETE_POST":{
      return{
        ...state,
        posts:state.posts.filter(p=>p.id!==action.payload.id)
      }
    }
    case "SET_SUCCESS_POST":
      return { ...state, isSuccess: action.payload };
    case "SET_LOADING_POST":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR_POST":
      return { ...state, isError: action.payload };
    case "SET_MESSAGE_POST":
      return { ...state, message: action.payload };
    case "SET_CMT_LOAD_POST":
      return { ...state, isCmtLoading: action.payload };
    default:
      return state;
  }
};

export const getUserHomePost = () => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while user post",
      null,
      null,
      "POST"
    );
    axios
      .get(`${url}/post`)
      .then((post) => {
        dispatcher(dispatch, false, "", null, null, "POST");
        dispatch({
          type: "GET_HOME_POST",
          payload: post.data,
        });
      })
      .catch((error) => {
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "POST"
        );
      });
  };
};

export const getPostsById = (id) => {
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while user post",
      null,
      null,
      "POST"
    );
    axios
      .get(`${url}/post?userId=${id}`)
      .then((post) => {
        dispatcher(dispatch, false, "", null, null, "POST");
        dispatch({
          type: "GET_HOME_POST",
          payload: post.data,
        });
      })
      .catch((error) => {
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "POST"
        );
      });
  };
};

export const addPost = ({ status, tags, imageId, schedule, date }) => {
  return (dispatch) => {
    let body = { status: status, schedule,date };
    if (tags) {
      body.tags = tags;
    }
    if (imageId) {
      body.imageId = imageId;
    }
    dispatcher(dispatch, true, "Uploading Status", null, null, "POST");
    axios
      .post(`${url}/post`, body)
      .then((res) => {
        dispatcher(dispatch, false, "Uploaded", null, false, "POST");
        if(schedule){
          toast.success(res.data.data, {
            position: "top-right",
            autoClose: 5000,
          });
        }else{
          toast.success(`Post uploaded successfully`, {
            position: "top-right",
            autoClose: 5000,
          });
          dispatch({
            type: "ADD_POST",
            payload: res.data.data,
          });
        }
      })
      .catch((err) => {
        dispatcher(
          dispatch,
          false,
          "Cannot upload status, Retry",
          true,
          null,
          "POST"
        );
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot upload post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      });
  };
};

export const addComment = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CMT_LOAD_POST",
      payload: true,
    });
    axios
      .post(`${url}/post/comment/${data.id}`, { comment: data.comment })
      .then((res) => {
        dispatch({
          type: "ADD_COMMENT",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot comment on post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        dispatch({
          type: "SET_CMT_LOAD_POST",
          payload: false,
        });
      });
  };
};

export const postLike = (data, maal) => {
  return (dispatch) => {
    axios
      .post(`${url}/post/like`, { postId: data.postId, likerId: data.likerId })
      .then((res) => {
        if(maal===-1){
          dispatch({
            type: "REMOVE_LIKE",
            payload: { ...data, maal, likeObj: res.data.data },
          });
        }else{
          dispatch({
            type: "ADD_LIKE",
            payload: { ...data, maal, likeObj: res.data.data },
          });
        }
      })
      .catch((err) => {
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot like post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      });
  };
};
export const postShare = (data, maal) => {
  return (dispatch) => {
    axios
      .post(`${url}/post/share/${data.postId}`, { postId: data.postId, likerId: data.likerId })
      .then((res) => {
        if(maal===-1){
          dispatch({
            type: "UN_SHARE",
            payload: { ...data, maal, likeObj: res.data.data },
          });
        }else{
          dispatch({
            type: "SHARE",
            payload: { ...data, maal, likeObj: res.data.data },
          });
        }
      })
      .catch((err) => {
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot share post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      });
  };
};


export const filterPost = (data) =>{
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while user post",
      null,
      null,
      "POST"
    );
    axios
      .get(
        `${url}/post?orderBy${data?.orderBy ? "=" + data.orderBy : ""}&sortBy${
          data?.sortBy ? "=" + data.sortBy : ""
        }&from${data?.from ? "=" + data.from : ""}&to${
          data?.to ? "=" + data.to : ""
        }&includeSharedPost${
          data?.includeSharedPost ? "=" + data.includeSharedPost : ""
        }=&tags${data?.tags ? "=" + data.tags : ""}&dateRange=${data.dateRange}`
      )
      .then((post) => {
        dispatcher(dispatch, false, "", null, null, "POST");
        dispatch({
          type: "GET_HOME_POST",
          payload: post.data,
        });
      })
      .catch((error) => {
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "POST"
        );
      });
  };
}


export const searchPost = (search) =>{
  return (dispatch) => {
    dispatcher(
      dispatch,
      true,
      "Please wait while user post",
      null,
      null,
      "POST"
    );
    axios
      .get(
        `${url}/post?search${search?"="+search:""}`
      )
      .then((post) => {
        dispatcher(dispatch, false, "", null, null, "POST");
        dispatch({
          type: "GET_HOME_POST",
          payload: post.data,
        });
      })
      .catch((error) => {
        dispatcher(
          dispatch,
          false,
          error.response?.data.error,
          null,
          null,
          "POST"
        );
      });
  };
}

/**
 * edit post
 * params
 * (
 *    {
 *      status:"",
 *      tags:"",
 *      imageId:""
 *    },
 *    id:1
 * )
 * 
 */
export const editPost = (data,id) => {
  return (dispatch) => {
    dispatcher(dispatch, true, "Updating Status", null, null, "POST");
    axios
      .put(`${url}/post/${id}`, { ...data })
      .then((res) => {
        dispatcher(dispatch, false, "updated", null, false, "POST");
        dispatch({
          type: "EDIT_POST",
          payload: res.data.data,
        });
        toast.success(
          `${
            "Status updated successfully"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      })
      .catch((err) => {
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot edit on post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        dispatcher(
          dispatch,
          false,
          "Cannot update status, Retry",
          true,
          null,
          "POST"
        );
      });
  };
};


export const setEditContent=(data)=>{
  return async (dispatch)=>{
    dispatch({
      type: "EDIT_POST_CONTENT",
      payload: data,
    });
  }
}

export const clearPost=()=>{
  return(dispatch)=>{
    dispatch({
      type: "CLEAR_POST"
    });
  }
}


// delete
export const deletePost = (id) => {
  return (dispatch) => {
    dispatcher(dispatch, true, "Updating Status", null, null, "POST");
    axios
      .delete(`${url}/post/${id}`)
      .then((res) => {
        dispatcher(dispatch, false, "updated", null, false, "POST");
        dispatch({
          type: "DELETE_POST",
          payload: res.data.data,
        });
        toast.success(
          `${
            "Status deleted successfully"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      })
      .catch((err) => {
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot delete on post"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        dispatcher(
          dispatch,
          false,
          "Cannot delete status, Retry",
          true,
          null,
          "POST"
        );
      });
  };
};
