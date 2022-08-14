import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import svgicon from "../../image/undraw_social_update_re_xhjr.svg";
import {loadAuth, loginAuth} from "../../redux-store/authStore"
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess, token } = useSelector((state) => state.auth);
  const [form, setform] = useState({
    email:"",
    password:""
  })
  const handleLogin=()=>{
    dispatch(loginAuth(form));
  }
  useEffect(()=>{
    if(data.id!=="" && isSuccess){
        navigate("/")
    }
  },[])

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex border">
        {/* left */}
        <div className="min-w-[400px] bg-slate-600 flex justify-center items-center flex-col relative">
          {/* <h1 className="font-mono top-5 absolute font-extrabold text-4xl text-white">
            Login
          </h1> */}
          <div className="bg-white w-[380px] py-6 px-2 rounded-md">
          <h1 className="font-mono  font-extrabold text-4xl text-slate-600 mb-4 w-full text-center">
            Login
          </h1>
            <input
              type="email"
              value={form.email}
              onChange={(e)=>{setform({...form,email:e.target.value})}}
              placeholder="Email"
              className="input w-full bg-slate-200 mb-3"
            />
            <input
              type="password"
              value={form.password}
              onChange={(e)=>{setform({...form,password:e.target.value})}}
              placeholder="Password"
              className="input w-full bg-slate-200 mb-3"
            />
            <button className={`btn w-full bg-slate-500 mb-3 ${isLoading?"loading":""}`} onClick={handleLogin}>Login</button>
            <div className="w-full text-center">
              <p>
                New to ShareStatus?{" "}
                <Link to="/auth/register" className="text-blue-700 underline">click here </Link>to register
              </p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="min-w-[400px] border border-slate-600 bg-white flex justify-center items-center h-[600px] flex-col relative">
          <h1 className="font-mono absolute top-5 font-extrabold text-4xl text-slate-600">
            ShareStatus.
          </h1>
          <img src={svgicon} alt="" className=" w-80" />
          <h1 className="font-mono absolute bottom-5 font-thin text-md text-slate-600">
            {" "}
            © 2022 SHARESTAUS V2 BY CHIRAG THAPA
          </h1>
        </div>
      </div>
    </div>
  );
}
