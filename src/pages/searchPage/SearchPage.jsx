import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Users from "../../components/user/Users";
import Posts from "../../components/post/Posts";

export default function SearchPage() {
    const [toggle, settoggle] = useState("USER")
    const handleToggle=()=>{
        settoggle(toggle==="USER"?"STATUS":"USER")
        console.log(settoggle)
    }
  return (
    <div className="mx-auto mt-3 w-[600px]">
      <div class="form-control w-full mb-3">
        <div class="input-group w-full">
          <input
            type="text"
            placeholder="Search…"
            class="input input-bordered w-full"
          />
          <button class="btn btn-square text-2xl">
            <FiSearch />
          </button>
        </div>
      </div>
      <div class="bg-white w-full flex rounded-sm">
        <button onClick={handleToggle} class={`border-t-4 ${toggle==="STATUS"?"border-slate-300":"border-white"} flex-1 p-3`}>
            Status
        </button>
        <button onClick={handleToggle} className={`border-t-4 ${toggle==="USER"?"border-slate-300":"border-white"} flex-1 p-3`}>
            Users
        </button>
      </div>
      <div>
        {
            toggle==="USER"?(
            <Users />
            ):(
                <Posts />
            )
        }
        
      </div>
    </div>
  );
}
