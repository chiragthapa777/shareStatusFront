import React from "react";
import {FiSearch} from "react-icons/fi"
import UserLists from "./UserLists";

export default function ChatUsers({userLists, loading}) {
  return (
    <div className="h-full w-[20vw] border-r-2  overflow-x-auto">
      <div className="bg-white p-2 border-b-2  flex justify-center items-center flex-col">
        <h1 className="font-mono p-1 text-2xl text-slate-600 font-bold">Chats</h1>
        <div className="form-control w-full mb-1">
          <div className="input-group w-full">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered bg-slate-200 w-full"
            />
            <button className="btn btn-square text-2xl">
            <FiSearch />
          </button>
          </div>
        </div>
      </div>
      <UserLists userLists={userLists} loading={loading} />
    </div>
  );
}
