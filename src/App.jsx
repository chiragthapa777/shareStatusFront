import React, { useEffect } from "react";
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
import { ToastContainer } from "react-toastify";
import { loadAuth } from "./redux-store/authStore";
import { useDispatch, useSelector } from "react-redux";
import AuthLoader from "./components/loader/AuthLoader";
import PostLoader from "./components/loader/PostLoader";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => state.auth
  );
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
          <Route path="/module/*" element={<Module />} />
          <Route path="/home/*" element={<HomeRouter />} />
          <Route path="/profile/*" element={<ProfileRouter />} />
          <Route path="/search/*" element={<SearchRouter />} />
          <Route path="/chat/*" element={<ChatRouter />} />
          {/* Protected routes */}

          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
}
