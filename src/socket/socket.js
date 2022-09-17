
import { ioUrl } from "../api/url";
import { io } from "socket.io-client";
import {setNotifications} from "../redux-store/notificationStore"
import { setSocketId } from "../redux-store/authStore";


export const Socket = (socket, userId, dispatch) => {
    socket.current = io(ioUrl);
    socket.current.on("connect", () => {
      if(socket?.current?.id){
        dispatch(setSocketId(socket.current.id))
      }
      socket.current.emit("add-online-user",{userId},(response)=>{
        // dispatch()
        
      })
    })
    return socket.current
};

export const socketIo=()=>{
    return
}
