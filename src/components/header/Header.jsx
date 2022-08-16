import React from "react";
import {
  FiHome,
  FiSearch,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import AddPost from "../post/Addpost";
import FilterModel from "../filter/FilterModel";
import Notication from "../notification/Notication";
import { useDispatch, useSelector } from "react-redux";
import { logoutAuth } from "../../redux-store/authStore";
import { toast } from "react-toastify";


export default function Header() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  const {isLoading, data}=useSelector(state=>state.auth)
  if(location.pathname.startsWith("/home")){
  } 
  const handleLogout=()=>{
    dispatch(logoutAuth(data.name))
    navigate("/auth")
  }
  if(location.pathname.startsWith("/auth")){
    return <></>
  } 
  return (
    <div className="navbar bg-slate-600 text-slate-300 drop-shadow-lg sticky top-0 z-50 font-semibold h-[10vh]">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-3xl font-semibold font-mono ">
          ShareStatus
        </Link>
      </div>
      <div className="navbar-center space-x-2">
        <button className="btn btn-ghost btn-circle text-2xl ">
          <Link to="/" className="tooltip tooltip-bottom capitalize	" data-tip="Home">
            <FiHome />
          </Link>
        </button>
        <AddPost />
        {
          location.pathname==="/home" &&<FilterModel />
        }
        
        <Notication />
        <Link to="/search" className="btn btn-ghost btn-circle text-2xl ">
          <div className="tooltip tooltip-bottom capitalize	" data-tip="Search">
            <FiSearch />
          </div>
        </Link>
        <Link to="/chat" className="btn btn-ghost btn-circle text-2xl ">
          <div
            className="indicator tooltip tooltip-bottom capitalize	"
            data-tip="Open Chat"
          >
            <FiMessageSquare />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </Link>
      </div>
      <div className="navbar-end pr-5">
        <div className="dropdown dropdown-end text-slate-700">
          <label tabIndex="0" className="btn btn-ghost btn-circle text-2xl	">
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-slate-300 ring-offset-base-100 ">
                <img src={
                  data?.image?.url
                    ? data?.image?.url
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                } alt=""/>
              </div>
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <div className="flex justify-centre items-center">
                Hello {data.name.split(" ")[0]}
              </div>
            </li>
            <li>
              <div className="flex justify-centre items-center" onClick={handleLogout}>
                <FiLogOut className="text-lg" />
                Logout
              </div>
            </li>
            <li>
              <Link to="/profile" className="flex justify-centre items-center">
                  <MdOutlineAccountCircle className="text-lg" />
                  Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
