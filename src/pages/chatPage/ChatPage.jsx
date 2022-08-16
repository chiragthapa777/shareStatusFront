import React, { useEffect, useState } from "react";
import ChatSpace from "../../components/chats/ChatSpace";
import ChatUsers from "../../components/chats/ChatUsers";
import {useSelector, useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import { getChats, getUserLists } from "../../redux-store/chatStore";
import axios from "axios";
import { url } from "../../api/url";
import { toast } from "react-toastify";
export default function ChatPage() {
  const { id } = useParams();
  const chat=useSelector(s=>s.chat)
  const dispatch= useDispatch()
  const [friend, setfriend] = useState({})
  const [friendloading, setfriendloading] = useState(false)
  useEffect(() => {
    if(id){
      dispatch(getChats(id))
      setfriendloading(true)
      axios.get(`${url}/user/${id}`)
      .then(res=>{
        setfriendloading(false)
        setfriend(res.data.data)
      })
      .catch(err=>{
        setfriendloading(false)
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot load user"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      })
    }

  }, [id])
  useEffect(()=>{
    dispatch(getUserLists())
  },[])
  
  return (
    <div className="flex w-[100vw] h-[90vh]">
      <ChatUsers userLists={chat.userLists} loading={chat.isUserListLoading}/>
      <ChatSpace chats={id?chat.chats:[]} loading={chat.isLoading}  friend={friend} friendloading={friendloading} />
    </div>
  );
}
