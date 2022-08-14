import React from "react";
import { FiMail } from "react-icons/fi";
import EditProfile from "./EditProfile";
import Follow from "./Follow";
import UserSetting from "./UserSetting";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { followAuth } from "../../redux-store/authStore";

export default function ProfileDetail({ data, loading }) {
  const {auth}=useSelector(s=>s)
  const dispatch=useDispatch()
  const location = useLocation();
  const handleFollow=(user)=>{
    if(auth?.data?.following.find(u=>u?.followingId===user?.id)){
      console.log("unfollow")
      dispatch(followAuth("unfollow",user))
    }else{
      console.log("follow")
      dispatch(followAuth("follow",user))
    }
  }
  if (loading) {
    return (
      <div className="w-full mx-auto bg-white drop-shadow-md text-sm my-2 min-h-44 mt-40">
        <div className="w-screen flex justify-center items-center mp-40"></div>
        {/* user detials */}
        <div className="pt-40 w-full flex justify-center items-center flex-col pb-6 "></div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full mx-auto bg-white drop-shadow-md text-sm my-2 min-h-44 mt-40">
        <div className="w-screen flex justify-center items-center mp-40">
          <div className="avatar absolute ">
            <div className="w-72 h-72  rounded-full">
              <img
                src={
                  data?.image?.url
                    ? data?.image?.url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        {/* user detials */}
        <div className="pt-40 w-full flex justify-center items-center flex-col pb-6 ">
          <div className="w-96">
            {/* name */}
            <h1 className="text-4xl font-bold text-center text-indigo-600 first-letter:">
              {data.name}
              {location.pathname === "/profile" && (
                <button
                  to="/search"
                  className="btn btn-ghost btn-circle text-2xl "
                >
                  <EditProfile />
                </button>
              )}
            </h1>
            {/* email */}
            <div className="text-center my-2 font-semibold flex justify-center items-center text-lg">
              <FiMail className=" my-auto text-2xl mr-2" />
              <p> {data.email}</p>
            </div>
            {/* bio */}
            <div className="text-center my-2 ">
              <p className="">{data.bio}</p>
            </div>
            {location.pathname !== "/profile" && (
              <div className="text-center mt-4">
                <button onClick={()=>handleFollow(data)} className="btn btn-error btn-sm">{auth?.data?.following?.find(u => u?.followingId === data?.id)?"unfollow":"follow"}</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white flex rounded w-[600px] drop-shadow-md mx-auto ">
        {location.pathname === "/profile" ? (
          <>
            <div className=" flex-1 p-3 flex justify-center items-center">
              <UserSetting />
            </div>
            <div className="divider divider-horizontal"></div>
          </>
        ) : (
          <></>
        )}
        <div className=" flex-1 p-3 flex justify-center items-center">
          <Follow type={"follower"} data={data}/>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className=" flex-1 p-3 flex justify-center items-center">
          <Follow type={"following"} data={data}/>
        </div>
      </div>
    </>
  );
}
