import React from "react";
import {
  FiBell,
  FiHome,
  FiSearch,
  FiLogOut,
  FiMessageSquare,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import AddPost from "../post/Addpost";
import FilterModel from "../filter/FilterModel";
import Notication from "../notification/Notication";


export default function Header() {
  const location=useLocation()
  console.log(location)
  if(location.pathname.startsWith("/auth")){
    return <></>
  } 
  return (
    <div className="navbar bg-slate-600 text-slate-300 drop-shadow-lg sticky top-0 z-50 font-semibold h-[10vh]">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-3xl font-semibold font-mono ">
          ShareStatus.
        </Link>
      </div>
      <div className="navbar-center space-x-2">
        <button className="btn btn-ghost btn-circle text-2xl ">
          <Link to="/" className="tooltip tooltip-bottom capitalize	" data-tip="Home">
            <FiHome />
          </Link>
        </button>
        <AddPost />
        <FilterModel />
        <Notication />
        <Link to="/search" className="btn btn-ghost btn-circle text-2xl ">
          <div className="tooltip tooltip-bottom capitalize	" data-tip="Search">
            <FiSearch />
          </div>
        </Link>
        <Link to="/chat/1" className="btn btn-ghost btn-circle text-2xl ">
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
          <label tabindex="0" className="btn btn-ghost btn-circle text-2xl	">
            <div class="avatar">
              <div class="w-12 rounded-full ring ring-slate-300 ring-offset-base-100 ">
                <img src="https://placeimg.com/192/192/people" alt=""/>
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <div className="flex justify-centre items-center">
                Hello Chirag
              </div>
            </li>
            <li>
              <div className="flex justify-centre items-center">
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
