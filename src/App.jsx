import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import HomeRouter from "./pages/homePage/HomeRouter";
import Header from "./components/header/Header";
import ProfileRouter from "./pages/profilePage/ProfileRouter";
import Module from "./pages/module/Module";
import AuthRouter from "./pages/authPage/AuthRouter";
import Error404 from "./pages/errorPage/Error404";
import ProtectRoute from "./utils/ProtectRoute";
import Unauthorized from "./pages/errorPage/Unauthorized";
import SearchRouter from "./pages/searchPage/SearchRouter";
import ChatRouter from "./pages/chatPage/ChatRouter";

export default function App() {
  return (
    <BrowserRouter>
      <div className={`min-h-screen bg-slate-200`}>
        <Header />  
        <Routes>
          <Route
            path="/module/*"
            element={
              <ProtectRoute role={"ADMIN"}>
                <Module />
              </ProtectRoute>
            }
          />
          <Route
            path="/home/*"
            element={
              <ProtectRoute role={""}>
                <HomeRouter />
              </ProtectRoute>
            }
          />
          <Route
            path="/profile/*"
            element={
              <ProtectRoute role={""}>
                <ProfileRouter />
              </ProtectRoute>
            }
          />
          <Route
            path="/search/*"
            element={
              <ProtectRoute role={""}>
                <SearchRouter />
              </ProtectRoute>
            }
          />
          <Route
            path="/chat/*"
            element={
              <ProtectRoute role={""}>
                <ChatRouter />
              </ProtectRoute>
            }
          />
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to={"/home"}/>  } />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
