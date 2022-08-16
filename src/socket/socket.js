
import { ioUrl } from "../api/url";
import { io } from "socket.io-client";
export const Socket = (socket, userId) => {
    socket.current = io(ioUrl);
    console.log("in socket")
    socket.current.on("connect", () => {
      console.log(`connected to server with id: ${socket.current.id}`);
    })
    socket.current.emit("message",{msg:"hello server", userId})
    return socket.current
};

export const socketIo=()=>{
    return
}
