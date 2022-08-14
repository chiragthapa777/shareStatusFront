import React, { useEffect } from 'react'
import ProfileDetail from '../../components/profile/ProfileDetail'
import Posts from '../../components/post/Posts'
import {getPostsById} from "../../redux-store/postStore"
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, isSuccess } = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);
  useEffect(()=>{
    dispatch(getPostsById(auth.data.id))
  },[])
  return (
    <div className=''>
        <ProfileDetail data={auth.data} loading={auth.isLoading} />
        <div className='w-full flex justify-center mt-5'> 
        {/* className is optional */}
        <Posts loading={isLoading} posts={posts} />
        </div>
    </div>
  )
}
