import { fromJSON } from "postcss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import svgicon from "../../image/undraw_social_update_re_xhjr.svg";
import {registerAuth} from "../../redux-store/authStore"
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess } = useSelector((state) => state.auth);
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
    validPw: true,
  });
  const handleRegister = () => {
    if (form.password !== form.re_password) {
      return setform({ ...fromJSON, validPw: false });
    }
    dispatch(registerAuth(form.name,form.email,form.password))
  };
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
            Register
          </h1> */}
          <div className="bg-white w-[380px] py-6 px-2 rounded-md">
            <h1 className="font-mono  font-extrabold text-4xl text-slate-600 mb-4 w-full text-center">
              Register
            </h1>
            <input
              type="text"
              value={form.name}
              onChange={(e) => {
                setform({ ...form, name: e.target.value });
              }}
              placeholder="Name"
              className="input w-full bg-slate-200 mb-3"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => {
                setform({ ...form, email: e.target.value });
              }}
              placeholder="Email"
              className="input w-full bg-slate-200 mb-3"
            />
            <input
              type="password"
              value={form.password}
              onChange={(e) => {
                setform({ ...form, password: e.target.value });
              }}
              placeholder="Password"
              className="input w-full bg-slate-200 mb-3"
            />
            <div className="w-full mb-3">
            <input
              type="password"
              value={form.re_password}
              onChange={(e) => {
                setform({ ...form, re_password: e.target.value });
              }}
              placeholder="Re-type Passwords"
              className="input w-full bg-slate-200"
            />
            {
              !form.validPw && (
            <label className="label">
              <span className="label-text-alt text-red-500">Password are not same</span>
            </label>
              )
             }
            </div>
            <button
              className={`btn w-full bg-slate-500 mb-3 ${isLoading?"loading":""}`}
              onClick={handleRegister}
            >
              Register
            </button>
            <div className="w-full text-center">
              <p>
                Already have an account?{" "}
                <Link to="/auth" className="text-blue-700 underline">
                  click here{" "}
                </Link>
                to login
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
