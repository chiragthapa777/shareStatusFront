import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import {useSelector} from "react-redux"

export default function HomeRouter() {
 const naviagte= useNavigate()
  const { data, isLoading, isError, isSuccess, token } = useSelector(
    (state) => state.auth
  );
  if(token==="" && data.id===""){
    naviagte("/auth")
  }
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
