import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import ProfileDetail from '../../components/profile/ProfileDetail'
import Posts from '../../components/post/Posts'
import {getPostsById} from "../../redux-store/postStore"
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../api/url";
import axios from "axios"
import {toast} from "react-toastify"

export default function VisitProfile() {
  const [loading, setloading] = useState(false)
  const [user, setuser] = useState({})
  let { id } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading, isError, isSuccess } = useSelector((state) => state.post);
  const { data } = useSelector((state) => state.auth);
  useEffect(()=>{
    dispatch(getPostsById(id))
    setloading(true)
    axios
    .get(`${url}/user/${id}`)
    .then((res) => {
      setuser(res.data.data)
      setloading(false)
    }).catch((err)=>{
      setloading(false)
      toast.error(`${err?.response?.data?.data ? err?.response?.data?.data :"Cannot load this user"}`, {
        position: "top-right",
        autoClose: 5000,
      });
    })
  },[])
  return (
    <div className=''>
        <ProfileDetail data={user} loading={loading} />
        <div className='w-full flex justify-center mt-5'> 
        {/* className is optional */}
        <Posts loading={isLoading} posts={posts} />
        </div>
    </div>
  )
}
