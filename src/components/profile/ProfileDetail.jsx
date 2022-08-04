import React from "react";
import { FiMail } from "react-icons/fi";
import EditProfile from "./EditProfile";
import Follow from "./Follow";
import UserSetting from "./UserSetting";

export default function ProfileDetail() {
  return (
    <>
      <div className="w-full mx-auto bg-white drop-shadow-md text-sm my-2 min-h-44 mt-40">
        <div className="w-screen flex justify-center items-center mp-40">
          <div className="avatar absolute ">
            <div className="w-72 h-72  rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
        {/* user detials */}
        <div className="pt-40 w-full flex justify-center items-center flex-col pb-6 ">
          <div className="w-96">
            {/* name */}
            <h1 className="text-4xl font-bold text-center text-indigo-600 first-letter:">
              Chirag Thapa
              <button
                to="/search"
                className="btn btn-ghost btn-circle text-2xl "
              >
                <EditProfile />
              </button>
            </h1>
            {/* email */}
            <div className="text-center my-2 font-semibold flex justify-center items-center text-lg">
              <FiMail className=" my-auto text-2xl mr-2" />
              <p> chirag@gmail.com</p>
            </div>
            {/* bio */}
            <div className="text-center my-2 ">
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reprehenderit illum impedit libero delectus placeat. Tempore
                repellendus possimus repellat perspiciatis dolorem.
              </p>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-error btn-sm">unFollow</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex rounded w-[600px] drop-shadow-md mx-auto ">
        <div className=" flex-1 p-3 flex justify-center items-center">
        <UserSetting />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className=" flex-1 p-3 flex justify-center items-center">
          <Follow type={"follower"}/>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className=" flex-1 p-3 flex justify-center items-center">
        <Follow type={"following"}/>
        </div>
      </div>
    </>
  );
}
