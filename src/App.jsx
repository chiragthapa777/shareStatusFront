import React, { useEffect,useRef  } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeRouter from "./pages/homePage/HomeRouter";
import Header from "./components/header/Header";
import ProfileRouter from "./pages/profilePage/ProfileRouter";
import Module from "./pages/module/Module";
import AuthRouter from "./pages/authPage/AuthRouter";
import Error404 from "./pages/errorPage/Error404";
import Unauthorized from "./pages/errorPage/Unauthorized";
import SearchRouter from "./pages/searchPage/SearchRouter";
import ChatRouter from "./pages/chatPage/ChatRouter";
import { toast, ToastContainer } from "react-toastify";
import { loadAuth } from "./redux-store/authStore";
import { useDispatch, useSelector } from "react-redux";
import AuthLoader from "./components/loader/AuthLoader";
import { io } from "socket.io-client";
import { Socket } from "./socket/socket";
import { getNotifications } from "./redux-store/notificationStore";
import { ioUrl } from "./api/url";
import { getOnlineUser } from "./redux-store/userStore";

export default function App() {
  const dispatch = useDispatch();
  const socket = useRef();
  const { isLoading, data, token, isAuth } = useSelector(
    (state) => state.auth
  );
  if(isAuth===false || data.focusMode===false){
    var interval_id = window.setInterval(()=>{}, 99999);
    for (var i = 0; i < interval_id; i++){
      window.clearInterval(i);
    }
  }
  useEffect(()=>{
    Socket(socket, data?.id,dispatch)
    const socketOnlineuser=io(ioUrl)
    socketOnlineuser.on("onlineUsers",(data)=>{
      dispatch(getOnlineUser(data))
    })
  },[ token])
  useEffect(()=>{
    let interval_id = window.setInterval(()=>{}, 99999);
    for (let i = 0; i < interval_id; i++){
      window.clearInterval(i);
    }
    if(isAuth){
      dispatch(getNotifications())
      if(data?.setting.focusMode){
        //localstorage play
        setInterval(()=>{
          toast.warning(`You have spend ${data?.setting?.focusInterval} minutes 😢`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        },Number(data?.setting?.focusInterval)*60*1000)
      }
    }
  },[data.id, data.focusMode,data.focusInterval])
  useEffect(() => {
    dispatch(loadAuth());
  },[]);

  if(isLoading ){
    return(
      <AuthLoader/>
    )
  }else{
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className={`min-h-screen bg-slate-200`}>
        <Header />
        {/* <PostLoader /> */}
        <Routes>
          {/* Protected routes */}
          {/* {isAuth &&  */}
            <Route >
              <Route path="/module/*" element={<Module />} />
              <Route path="/home/*" element={<HomeRouter isAuth={isAuth} />} />
              <Route path="/profile/*" element={<ProfileRouter isAuth={isAuth}  />} />
              <Route path="/search/*" element={<SearchRouter isAuth={isAuth}  />} />
              <Route path="/chat/*" element={<ChatRouter isAuth={isAuth}  />} /> 
            </Route>
          {/* } */}
          {/* Protected routes */}

          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Navigate to={!isAuth?"/auth":"/home"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
}
