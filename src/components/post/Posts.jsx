import React from 'react'
import Postcard from './Postcard'
import Loader from '../loader/loadComp/Loader'
import { useLocation } from 'react-router-dom'

export default function Posts({loading, posts}) {
  const location=useLocation()
  if(loading){
    return(
      <div className='Post flex justify-center items-center w-[520px]'>
        <Loader /> <p className='ml-2'>Please wait loading post</p>
      </div>
    )
  }else{
  return (
    <div className={`Post flex flex-col items-center mb-7 ${posts.length<1?"w-[520px] text-lg":""}`}>
        {posts.length>0 &&
        posts.map(post=><Postcard key={post.id} post={post}/>)}
        {
          (posts.length===0 && location.pathname==='/home') &&
        <h1 className='mt-2'>
          Sorry can't find any status for your feed.
          <br/> Inorder the see status in your feed, you must follow other users or create your own status.
        </h1>
        } 
        
    </div>
  )
  }
}
