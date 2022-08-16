import React from 'react'
import { Routes, Route } from "react-router-dom";
import ChatPage from './ChatPage';

export default function ChatRouter() {
  return (
    <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/:id" element={<ChatPage />} />
    </Routes>
  )
}
