import React from "react";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import EditProfile from "./EditProfile";
import Follow from "./Follow";
import UserSetting from "./UserSetting";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { followAuth } from "../../redux-store/authStore";

export default function ProfileDetail({ data, loading }) {
  const {auth}=useSelector(s=>s)
  const dispatch=useDispatch()
  const location = useLocation();
  const handleFollow=(user)=>{
    if(auth?.data?.following.find(u=>u?.followingId===user?.id)){
      dispatch(followAuth("unfollow",user))
    }else{
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
              <div className="flex justify-center items-center">
              <div className="text-center mt-4">
                <button onClick={()=>handleFollow(data)} className="btn btn-error btn-sm">{auth?.data?.following?.find(u => u?.followingId === data?.id)?"unfollow":"follow"}</button>
              </div>
              <div className="text-center mt-4 ml-2">
                <Link to={`/chat/${data.id}`} className="btn btn-success btn-sm"> <FiMessageSquare className="mr-2 text-lg text-green-200"/> <p className="my-auto">Message</p></Link>
              </div>
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
