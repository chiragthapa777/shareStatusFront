import React from "react";
import { Link } from "react-router-dom";
import svgicon from "../../image/undraw_social_update_re_xhjr.svg";

export default function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex border">
        {/* left */}
        <div className="min-w-[400px] bg-slate-600 flex justify-center items-center flex-col relative">
          <h1 className="font-mono top-5 absolute font-extrabold text-4xl text-white">
            Login
          </h1>
          <div className="bg-white w-[380px] py-6 px-2 rounded-md">
            <input
              type="email"
              placeholder="Email"
              class="input w-full bg-slate-200 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              class="input w-full bg-slate-200 mb-3"
            />
            <button class="btn w-full bg-slate-500 mb-3">Login</button>
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
