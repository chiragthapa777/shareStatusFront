import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux/es/exports";
import { followAuth } from "../../redux-store/authStore";

export default function Users({users, search}) {
  const dispatch=useDispatch()
  const {data}=useSelector(state=>state.auth)
  const handleFollow=(user)=>{
    if(data?.following.find(u=>u?.followingId===user?.id)){
      dispatch(followAuth("unfollow",user))
    }else{
      dispatch(followAuth("follow",user))
    }
  }
  if(users.isLoading){
    return(
      <div className="w-full p-2 bg-slate-200 rounded-md">{users.message?users.message:"Getting users"}</div>
    )
  }else{
    return (
      <div className="w-full p-2 bg-slate-200 rounded-md">
        {(users?.users?.length === 0 && search==="") && "Start searching"}
        {(users?.users?.length === 0 && search!=="") && `Cannot find any user with keyword "${search}"`}
        {users?.users?.length > 0 &&
          users.users.map((user) => {
           return (
             <div 
               key={user.id}
               className="w-full flex justify-between items-center bg-white p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md "
             >
               <Link  to={`/profile/${user.id}`} className="flex">
                 <div className={`avatar ${users.onlineUsers.find(u=>u.userId===user.id)?"online":""}`}>
                   <div className="w-8 my-auto rounded-full">
                     <img
                       src={
                         user?.image?.url
                           ? user.image.url
                           : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                       }
                       alt=""
                     />
                   </div>
                 </div>
                 <div className="flex flex-col ml-2">
                   <p className="text-sm">{user.name}</p>
                   <p className="text-xs font-thin">{user.email}</p>
                 </div>
               </Link>
               <div>
                 <button
                   onClick={() => handleFollow(user)}
                   className="btn btn-ghost btn-xs text-green-500"
                 >
                   {data?.following?.find(u => u?.followingId === user?.id)?"unfollow":"follow"}
                 </button>
               </div>
             </div>
           );
          })}
      </div>
    );
  }
}
