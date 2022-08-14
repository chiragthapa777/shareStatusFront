import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { logoutAuth } from "../../redux-store/authStore";
import { useDispatch, useSelector } from "react-redux";
import Users from "../user/Users";

export default function CopyRight({users}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, data } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logoutAuth(data.name));
    navigate("/auth");
  };
  return (
    <div className="w-full mx-5 p-2 bg-white rounded-md mt-3 ">
      {/* profile */}
      <div className="w-full flex justify-between items-center bg-white p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md ">
        <Link to={"/profile"} className="flex">
          <div className="avatar online">
            <div className="w-16 my-auto rounded-full">
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
          <div className="flex flex-col ml-6 my-auto">
            <p className="text-sm">{data.name}</p>
            <p className="text-xs font-thin">{data.email}</p>
          </div>
        </Link>
        <div>
          <button
            onClick={handleLogout}
            className="btn btn-ghost btn-xs text-green-500"
          >
            Logout
          </button>
        </div>
      </div>
      {/* users */}
      <div>
        <h1 className="mb-2">New users in share status</h1>
        <Users users={users} />
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
