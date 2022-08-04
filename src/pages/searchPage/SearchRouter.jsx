import React from 'react'
import { Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';

export default function SearchRouter() {
  return (
    <Routes>
        <Route path='/' element={<SearchPage />}/>
    </Routes>
  )
}
