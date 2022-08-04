import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProfilePage from './ProfilePage';
import VisitProfile from './VisitProfile';

export default function ProfileRouter() {
  return (
    <Routes>
        <Route path='/' element={<ProfilePage />}/>
        <Route path='/:id' element={<VisitProfile />}/>
    </Routes>
  )
}
