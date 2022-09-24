import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import { FiSend } from "react-icons/fi";
import Loader from "../loader/loadComp/Loader";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { receiveChats, sendChats } from "../../redux-store/chatStore";
import { ioUrl } from "../../api/url";
import { io } from "socket.io-client";
import {Link} from "react-router-dom"
export default function ChatSpace({ chats, loading, friend, friendloading, isWelcome }) {
  const chat=useSelector(s=>s.chat)
  const {onlineUsers}=useSelector(s=>s.users)
  const {data}=useSelector(s=>s.auth)
  const dispatch=useDispatch()
  const [message, setmessage] = useState("")
  const location = useLocation();
  const handleSend=()=>{
    dispatch(sendChats(message,friend.id,data.id ))
    setmessage("")
  }

  useEffect(() => {
    if(data.id && friend.id){
      let userArr=[friend.id,data.id]
      userArr.sort((a,b)=>a-b)
      const room=userArr.join("and")
      const socket=io(ioUrl)
      socket.emit("join-room",room)
      socket.on("receive-message",(message)=>{
        dispatch(receiveChats(message))
      })
    }

  }, [data.id,friend.id ])


  if (isWelcome) {
    return (
    <div className="w-[80vw] h-[90vh] flex justify-center items-center">
      <h1 className="text-xl">Select a user to start chatting.</h1>
    </div>
    );
  }

  if (loading || friendloading) {
    return (
      <div className="w-[80vw] h-[90vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-[80vw] h-[90vh]">
      <div className="sticky top-[10vh] bg-white border-b-2  w-full">
        {/* header */}
        <div className="flex p-2">
          <Link to={`/profile/${friend.id}`} className="avatar">
            <div  className="w-12 rounded-full">
              <img src={
                        friend?.image?.url
                          ? friend.image.url
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt="" />
            </div>
          </Link>
          <div className="flex flex-col ml-2">
            <p className="text-lg">{friend.name}</p>
            <p className="text-xs font-thin">{onlineUsers.find(u=>u.userId===friend.id)?"active":friend.email}</p>
          </div>
        </div>
      </div>
      {/* chatbody */}
      <ChatBody chats={chats} />
      <div className="sticky top-[92vh] h-[8vh] bg-white border-t-2  w-full flex justify-center items-center">
        {/* form */}
        <div className="form-control w-full px-2">
          <div className="input-group w-full">
            <input
              value={message}
              onChange={e=>{
                setmessage(e.target.value)
              }}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-full"
            />
            <button className={`btn ${chat.isSendLoading?"loading":""} btn-square`} onClick={handleSend}>
            {chat.isSendLoading?"":<FiSend className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
