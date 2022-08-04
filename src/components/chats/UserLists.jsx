import React from "react";
import { Link } from "react-router-dom";

export default function UserLists({ userLists }) {
  return (
    <div className="p-1 w-full">
      {userLists.length > 0 &&
        userLists.map((user) => {
          return (
            <Link to={`/chat/${user.id}`} key={user.id} className="w-full flex justify-between items-center bg-white p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md ">
              <div className="flex">
                <div class="avatar online">
                  <div class="w-10 my-auto rounded-full">
                    <img
                      src={
                        user?.image?.url
                          ? user.image
                          : "https://placeimg.com/192/192/people"
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-2">
                  <p className="text-lg">{user.name}</p>
                  <p className="text-xs font-thin">
                    {user?.sender?.length > 0 ? user.sender[0].chat : ""}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
