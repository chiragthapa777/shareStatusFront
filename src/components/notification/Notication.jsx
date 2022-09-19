import moment from "moment";
import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ioUrl } from "../../api/url";
import { io } from "socket.io-client";
import { setNotifications, updateNotification } from "../../redux-store/notificationStore";
import { useDispatch } from "react-redux";


export default function Notication() {
  const dispatch=useDispatch()
  const[notify,setNotify]= useState(false)
  const {socketId, data, token}=useSelector(s=>s.auth)
  useEffect(()=>{
    if(socketId){
      const socket=io(ioUrl)
      socket.emit("join-room",socketId+"_room")
      socket.on("push-notification",(message)=>{
        dispatch((setNotifications(message)))
      })
    }
  },[socketId, data, token])
  const {isLoading, notifications}=useSelector(s=>s.notify)

  const handleClick=()=>{
    setTimeout(()=>{
      dispatch(updateNotification())
    },5000)
    
    setNotify(!notify)
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0">
      <button className="btn btn-ghost btn-circle text-2xl " onClick={handleClick}>
          <div
            className="indicator tooltip tooltip-bottom capitalize"
            data-tip="notifications"
          >
            <FiBell />
            {notifications.find(n=>!n.seen) && <span className="badge badge-xs badge-primary indicator-item">{notifications.reduce((sum,n)=>!n.seen?sum+1:sum+0,0)}</span>}
            
          </div>
        </button>
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg min-w-[400px] text-slate-800 max-h-[600px] overflow-y-auto "
      >{notifications.length>0 ? notifications.map(n=>{
        return(
        <li key={n.id} >
          <div className={`border mb-1 ${n.seen?"hover:bg-slate-200":"bg-blue-100 hover:bg-blue-200"}`}>
            <p className="block">{n.notication} <br/><span className="text-sm font-thin block">{moment(n.createdAt).fromNow()}</span></p>
            </div>
        </li>
        )
      }): <h1 className="m-1">You don't have any notification</h1> }
      </ul>
    </div>
  );
}
