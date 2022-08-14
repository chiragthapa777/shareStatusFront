import React from 'react'
import Loader from './loadComp/Loader'
import {useSelector} from "react-redux"

export default function AuthLoader() {
  const {message}=useSelector(state=>state.auth)
  return (
    <div className='absolute z-50 w-[100vw] h-[100vh] text-2xl flex justify-center items-center bg-slate-200 text-slate-600'>
      <h1 className='mr-4'>{message?message:"Please wait"}</h1>
      <Loader/>
    </div>
  )
}
