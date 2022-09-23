import React, { useState } from "react";
import moment from "moment";
import {
  FiMoreVertical,
  FiEdit,
  FiDelete,
} from "react-icons/fi";
import { FaThumbsUp, FaShareAlt, FaComment } from "react-icons/fa"
import { IoSendSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deletePost, postLike, postShare } from "../../redux-store/postStore";
import Confirm from "../confirm/Confirm";
import EditPost from "./EditPost";

export default function Postcard({ post }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {onlineUsers} = useSelector((state) => state.users);
  const [showcmt, setshowcmt] = useState(false);
  const [comment, setComment] = useState("");
  const handleAddComment = () => {
    const data = {
      comment,
      id: post.id,
    };
    dispatch(addComment(data));
  };
  const handleLike = () => {
    let maal = 0;
    let data = {
      postId: post.id,
      likerId: auth.data.id,
    };
    if (post.likes.find((like) => like.user.id === auth.data.id)) {
      maal = -1;
    } else {
      maal = 1;
    }
    dispatch(postLike(data, maal));
  };
  const handleShare = () => {
    let maal = 0;
    let data = {
      postId: post.id,
      likerId: auth.data.id,
    };
    if (post.shares.find((share) => share.user.id === auth.data.id)) {
      maal = -1;
    } else {
      maal = 1;
    }
    dispatch(postShare(data, maal));
  };

  const handleDeletePost = () =>{
    dispatch(deletePost(post.id))
  }

  return (
    <div className="PostCard bg-white rounded-sm w-[520px] rounded-md mt-3 drop-shadow-md text-sm">
      {/* top start  */}
      <div className=" flex justify-between m-1">
        <Link to={`/profile/${post.user.id}`} className={`avatar `}>
          <div className="w-10 rounded-full">
            <img
              src={
                post?.user?.image?.url
                  ? post?.user?.image?.url
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt=""
            />
          </div>
          <p className="my-auto  ml-3 font-semibold">
            {post.user.name}{" "}
            {post?.wasSharedBy && (
              <>
                <br />{" "}
                <Link
                  to={`/profile/${post.wasSharedBy.user.id}`}
                  className="text-slate-400 text-2xs font-extralight hover:underline"
                >{`This status was shared by `}<span className="text-slate-500 font-normal">{`${post?.wasSharedBy?.user?.name}`}</span>{` ${moment(post.wasSharedBy.createdAt).fromNow()}`}</Link>
              </>
            )}
          </p>
        </Link>
        <div className="my-auto text-sm flex">
          <p className="text-[10px] my-auto">
            {moment(post.createdAt).fromNow()}
          </p>
          {location.pathname === "/profile" && (
            <div className="dropdown my-auto ml-3">
              <label tabIndex="0" className="text-lg">
                <FiMoreVertical />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
              >
                <li>
                  <div className="flex justify-centre items-center text-red-600">
                    <FiDelete className="text-lg" />
                    <Confirm
                      buttonText="delete"
                      text="Are you sure you want to delete this status ?"
                      actionFunc={handleDeletePost}
                    />
                  </div>
                </li>
                <li>
                  {/* edit post */}
                  <EditPost postContent={post} />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* top end */}

      {/* middle image start */}
      {post?.image && (
        <div className="w-full">
          <img src={post.image.url} alt="" className="w-full object-cover max-h-96" />
        </div>
      )}

      {/* middle image end*/}
      {!post?.image && <div className="divider m-0 p-0"></div>}

      {/* status start*/}
      <div className="m-1 border-b-2 pb-1">
        <p>
          {post.status} <br />
          {post?.tags?.length > 0 &&
            post.tags.map((tag) => (
              <div
                key={tag.id}
                className="badge badge-primary badge-outline pb-1 cursor-pointer text-xs ml-1"
              >
                {tag.tag.tag}
              </div>
            ))}
        </p>
      </div>
      {/* status end*/}
      {/* action start */}
      <div
        className={`flex m-1 justify-evenly ${
          showcmt ? "border-b-2" : ""
        } pb-1`}
      >
        <div className="my-auto text-center flex justify-center items-center flex-col cursor-pointer hover:text-blue-600">
          <FaThumbsUp
            className={`text-lg text-slate-600  ${
              post.likes.find((c) => c.user.id === auth.data.id)
                ? "text-primary"
                : "text-slate-400"
            }`}
            onClick={handleLike}
          />
          <p className="text-xs">{`${post.likes.length} Likes`}</p>
        </div>
        <div
          className="my-auto text-center flex justify-center items-center flex-col cursor-pointer hover:text-blue-600"
          onClick={() => {
            setshowcmt(!showcmt);
          }}
        >
          <FaComment
            className={`text-lg text-slate-600  ${
              post.comments.find((c) => c.user.id === auth.data.id)
                ? "text-primary"
                : "text-slate-400"
            }`}
          />
          <p className="text-xs">{`${post.comments.length} Comments`}</p>
        </div>
        <div className="my-auto text-center flex justify-center items-center flex-col cursor-pointer hover:text-blue-600">
          <FaShareAlt
            className={`text-lg text-slate-600 ${
              post.shares.find((c) => c.user.id === auth.data.id)
                ? "text-primary"
                : "text-slate-400"
            }`}
            onClick={handleShare}
          />
          <p className="text-xs">{`${post.shares.length} Shares`}</p>
        </div>
      </div>
      {/* action end */}
      {/* show all comments starts */}
      {showcmt && (
        <>
          {post.comments.length > 0 &&
            post.comments.map((cmt) => (
              <div className=" pb-1 m-1 max-h-56 overflow-auto ">
                <div className="w-full   mb-1 flex">
                  <div className="avatar mr-2">
                    <div className="w-7 h-7 mx-auto rounded-full">
                      <img
                        src={
                          cmt?.user?.image?.url
                            ? cmt?.user?.image?.url
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col bg-slate-100 rounded p-2">
                    <p className="font-semibold">
                      {cmt.user.name}{" "}
                      <span className="font-thin text-[10px]">
                        {moment(cmt.createdAt).fromNow()}
                      </span>
                    </p>
                    <p>{cmt.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          <div
            className={`p-1 flex pb-2 ${
              post.comments.length > 0 && "border-t"
            }`}
          >
            <input
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Add a comment ..."
              className="input w-full input-ghost px-1 h-auto ml-1"
            />
            <button
              onClick={handleAddComment}
              className="my-auto p-2 ml-1 rounded-md hover:bg-slate-200 hover:cursor-pointer"
            >
              <IoSendSharp />
            </button>
          </div>
        </>
      )}
      {/* add comment end */}
    </div>
  );
}
