import React, { useEffect } from 'react'
import Posts from '../../components/post/Posts'
import CopyRight from '../../components/copyright/CopyRight'
import {getUserHomePost} from "../../redux-store/postStore"
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../../redux-store/userStore';


export default function Homepage() {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, isSuccess } = useSelector((state) => state.post);
  const users = useSelector((state) => state.users);
  useEffect(()=>{
    dispatch(getUserHomePost())
    dispatch(getUsers({take:5,search:''}))
  },[])
  return (
    <div className='Homepage flex justify-center'>
      <Posts loading={isLoading} posts={posts} />
      <div className='w-[320px]'>
      <CopyRight users={users} />
      </div>
    </div>
  )
}
