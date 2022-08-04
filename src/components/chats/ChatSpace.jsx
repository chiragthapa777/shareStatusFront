import React from "react";
import ChatBody from "./ChatBody";
import {FiSend} from "react-icons/fi"
export default function ChatSpace({chats}) {
  return (
    <div className="w-[80vw] h-[90vh]">
      <div className="sticky top-[10vh] bg-white border-b-2 border-slate-500 w-full">
        {/* header */}
        <div className="flex p-2">
          <div class="avatar">
            <div class="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-lg">Ram</p>
            <p className="text-xs font-thin">Active</p>
          </div>
        </div>
      </div>
        {/* chatbody */}
        <ChatBody chats={chats} />
      <div className="sticky top-[92vh] h-[8vh] bg-white border-t-2 border-slate-500 w-full flex justify-center items-center">
        {/* form */}
        <div class="form-control w-full px-2">
          <div class="input-group w-full">
            <input
              type="text"
              placeholder="Search…"
              class="input input-bordered w-full"
            />
            <button class="btn btn-square">
            <FiSend className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
