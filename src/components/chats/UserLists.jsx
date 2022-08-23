import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function UserLists({ userLists, loading }) {
  const {id}=useParams()
  const {onlineUsers}=useSelector(s=>s.users)
  if(loading){
    return(
      <>loading...</>
    )
  }
  return (
    <div className="p-1 w-full">
      {userLists?.length > 0 &&
        userLists.map((user) => {
          console.log(user)
          return (
            <Link to={`/chat/${user.id}`} key={user.id} className={`w-full flex justify-between items-center ${id===user?.id ?"bg-slate-200":"bg-white"} p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md `}>
              <div className="flex">
                <div className={`avatar ${onlineUsers.find(u=>u.userId===user.id)?"online":""}`}>
                  <div className="w-10 my-auto rounded-full">
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
                  <p className="text-lg">{user.name}</p>
                  <p className="text-xs font-thin">
                    {user?.sender?.length > 0 ? user.sender[0].chat.substring(0, 10)+" ..." : ""}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
