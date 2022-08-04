import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Byid from './Byid';
import Extra from './Extra';

export default function Module() {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Byid />} />
            <Route path="/extra" element={<Extra />} />
         </Routes>
    </div>
  )
}
