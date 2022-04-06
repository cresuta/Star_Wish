import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
//   else{
//    return(
//       <Routes>
//         <Route path="/" element={<Hello />} />
//       </Routes>
//    );
//   }
}