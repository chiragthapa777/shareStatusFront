import React from "react";
import Users from "../user/Users";

export default function CopyRight() {
  return (
    <div className="w-full mx-5 p-2 bg-white rounded-md mt-3 ">
      {/* profile */}
      <div  className="w-full flex justify-between items-center bg-white p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md ">
            <div className="flex">
              <div class="avatar online">
                <div class="w-16 my-auto rounded-full">
                  <img src="https://placeimg.com/192/192/people" alt="" />
                </div>
              </div>
              <div className="flex flex-col ml-6 my-auto">
                <p className="text-sm">Chirag Thapa</p>
                <p className="text-xs font-thin">chirag@gmail.com</p>
              </div>
            </div>
            <div>
              <button class="btn btn-ghost btn-xs text-green-500">Logout</button>
            </div>
          </div>
      {/* users */}
      <div>
        <h1 className="mb-2">New users in share status</h1>
        <Users />
      </div>
      {/* copyright message */}
      <div className="my-4">
        <p className="font-thin text-slate-700 text-sm">
          © 2022 SHARESTAUS V2 BY CHIRAG THAPA
        </p>
      </div>
    </div>
  );
}
