import React from 'react'
import { Navigate } from "react-router-dom";

export default function ProtectRoute({children , role}) {
    console.log(role)
    let auth = {
        user: {
          id: 1,
          role: "USER",
          // role:"ADMIN"
        },
        token: "asdgads",
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: "",
      };
      if (!auth?.token) {
        // no token in local storage
        return <Navigate to="/login" />;
      }
      else if (!auth?.user?.id) {
        // invalid token
        return <Navigate to="/login" />;
      }
      else if(role!=="" && role!==auth.user.role){
        // unauthorized
        return <Navigate to="/unauthorized" />
      }
      else{
        return children
      }
}
