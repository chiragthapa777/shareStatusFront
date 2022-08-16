import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Users from "../../components/user/Users";
import Posts from "../../components/post/Posts";
import { useSelector, useDispatch } from "react-redux";
import { searchPost } from "../../redux-store/postStore";
import { getUsers } from "../../redux-store/userStore";

export default function SearchPage() {
    const {users, post}=useSelector(s=>s)
    const dispatch=useDispatch()
    const [toggle, settoggle] = useState("USER")
    const [search, setsearch] = useState("")
    const handleToggle=()=>{
        settoggle(toggle==="USER"?"STATUS":"USER")
    }
    const handleChanage=(e)=>{
      setsearch(e.target.value)
      tiggerSearch()
    }

    const tiggerSearch=()=>{
      //trigger serach
      dispatch(getUsers({search, take:100}))
      dispatch(searchPost(search))
    }
  return (
    <div className="mx-auto mt-3 w-[600px]">
      <div className="form-control w-full mb-3">
        <div className="input-group w-full">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-full"
            value={search}
            onChange={handleChanage}
          />
          <button className="btn btn-square text-2xl" onClick={tiggerSearch}>
            <FiSearch />
          </button>
        </div>
      </div>
      <div className="bg-white w-full flex rounded-sm">
        <button onClick={handleToggle} className={`border-t-4 ${toggle==="STATUS"?"border-slate-300":"border-white"} flex-1 p-3`}>
            Status
        </button>
        <button onClick={handleToggle} className={`border-t-4 ${toggle==="USER"?"border-slate-300":"border-white"} flex-1 p-3`}>
            Users
        </button>
      </div>
      <div>
        {
            toggle==="USER"?(
            <Users users={users} />
            ):(
                <Posts posts={post.posts} loading={post.isLoading} />
            )
        }
        
      </div>
    </div>
  );
}
