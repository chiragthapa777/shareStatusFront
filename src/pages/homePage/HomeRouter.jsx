import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
