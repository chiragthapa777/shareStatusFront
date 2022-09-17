import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import ProfilePage from './ProfilePage';
import VisitProfile from './VisitProfile';
import {useSelector} from "react-redux"

export default function ProfileRouter({isAuth}) {
  const naviagte= useNavigate()
  const { data, isLoading, isError, isSuccess, token } = useSelector(
    (state) => state.auth
  );
  if(token==="" && data.id===""){
    naviagte("/auth")
  }
  if(!isAuth){
    naviagte("/auth")
  }
  return (
    <Routes>
        <Route path='/' element={<ProfilePage />}/>
        <Route path='/:id' element={<VisitProfile />}/>
    </Routes>
  )
}
