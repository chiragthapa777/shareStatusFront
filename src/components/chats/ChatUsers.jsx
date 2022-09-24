import React, { useState } from "react";
import {FiSearch} from "react-icons/fi"
import UserLists from "./UserLists";

export default function ChatUsers({userLists, loading, search, setsearch, handleSearch, id}) {
  
  const [sort, setSort] = useState("")
  return (
    <div className="h-full w-[20vw] border-r-2  overflow-x-auto bg-white">
      <div className="bg-white p-2 border-b-2  flex justify-center items-center flex-col sticky top-[0vh] z-30">
        {/* <h1 className="font-mono p-1 text-2xl text-slate-600 font-bold">Chats</h1> */}
        <div className="form-control w-full mb-1">
          <div className="input-group w-full">
            <input
              value={search}
              onChange={(e)=>{setsearch(e.target.value)}}
              type="text"
              placeholder="Search…"
              className="input input-bordered bg-slate-200 w-full"
            />
            <button className="btn btn-square text-2xl" onClick={()=>{handleSearch()}}>
            <FiSearch />
          </button>
          </div>
        </div>
      </div>
      <UserLists userLists={userLists} loading={loading} id={id} search={search} />
    </div>
  );
}
