import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from './ChatPage';

export default function ChatRouter({isAuth}) {
  const naviagte= useNavigate()
  if(!isAuth){
    naviagte("/auth")
  }
  return (
    <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/:id" element={<ChatPage />} />
    </Routes>
  )
}
