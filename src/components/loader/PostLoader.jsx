import React from 'react'
import { FiDelete, FiEdit, FiMessageCircle, FiMoreVertical, FiShare2, FiThumbsUp } from 'react-icons/fi'
import { IoSendSharp } from 'react-icons/io5'

export default function PostLoader() {
  return (
    <div className="PostCard bg-white rounded-sm w-[520px] rounded-md mt-3 drop-shadow-md text-sm">
      {/* top start  */}
      <div className=" flex justify-between m-1">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
          </div>
          <p className="my-auto  ml-3 font-semibold bg-slate-00"></p>
        </div>
        <div className="my-auto text-sm flex">
          <p className="text-[10px] my-auto">9 hours ago</p>
          <div className="dropdown my-auto ml-3">
            <label tabIndex="0" className="text-lg" >
            <FiMoreVertical />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
              <div className="flex justify-centre items-center text-red-600">
                <FiDelete className="text-lg" />
                Delete
              </div>
              </li>
              <li>
              <div className="flex justify-centre items-center text-green-600">
                <FiEdit className="text-lg" />
                Edit
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* top end */}

      {/* middle image start */}
      <div className="w-full">
        <img
          src="https://placeimg.com/192/192/people"
          alt=""
          className="w-full object-cover"
        />
      </div>
      {/* middle image end*/}
      {/* <div className="divider m-0 p-0"></div>  */}

      {/* status start*/}
      <div className="m-1 border-b-2 pb-1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime,
          nulla aliquam alias id exercitationem?
        </p>
      </div>
      {/* status end*/}
      {/* action start */}
      <div className="flex m-1 justify-evenly border-b-2 pb-1">
        <div className="my-auto text-center flex justify-center items-center flex-col">
          <FiThumbsUp className="text-md" />
          <p>8 Likes</p>
        </div>
        <div className="my-auto text-center flex justify-center items-center flex-col">
          <FiMessageCircle />
          <p>8 Comment</p>
        </div>
        <div className="my-auto text-center flex justify-center items-center flex-col">
          <FiShare2 />
          <p>8 Share</p>
        </div>
      </div>
      {/* action end */}
      {/* show all comments starts */}
      <div className="border-b-2 pb-1 m-1 max-h-56 overflow-auto ">
        <div className="w-full   mb-1 flex">
          <div className="avatar mr-2">
            <div className="w-10 h-10 mx-auto rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <div className=" flex flex-col bg-slate-100 rounded p-2">
            <p className="font-semibold">
              Chirag Thapa <span className="font-thin text-[10px]">4h ago</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, ipsam!
            </p>
          </div>
        </div>
        <div className="w-full   mb-1 flex">
          <div className="avatar mr-2">
            <div className="w-10 h-10 mx-auto rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <div className=" flex flex-col bg-slate-100 rounded p-2">
            <p className="font-semibold">
              Chirag Thapa <span className="font-thin text-[10px]">4h ago</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, ipsam!
            </p>
          </div>
        </div>
      </div>
      {/* show all comments ends */}
      {/* add comment start */}
      <div className="p-1 flex pb-2">
        <input
          type="text"
          placeholder="Add a comment ..."
          className="input w-full input-ghost px-1 h-auto ml-1"
        />
        <div className="my-auto p-2 ml-1 rounded-md hover:bg-slate-200 hover:cursor-pointer">
          <IoSendSharp />
        </div>
      </div>
      {/* add comment end */}
    </div>
  )
}
