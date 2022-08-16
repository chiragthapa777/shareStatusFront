import React from 'react'
import Postcard from './Postcard'
import Loader from '../loader/loadComp/Loader'

export default function Posts({loading, posts}) {
  if(loading){
    return(
      <div className='Post flex justify-center items-center w-[520px]'>
        <Loader /> <p className='ml-2'>Please wait loading post</p>
      </div>
    )
  }else{
  return (
    <div className={`Post flex flex-col items-center ${posts.length<1?"w-[520px] text-lg":""}`}>
        {posts.length>0 ?
        posts.map(post=><Postcard key={post.id} post={post}/>):
        <h1 className='mt-2'>
          😢 Sorry can't find any status for your feed
        </h1>
        }
    </div>
  )
  }
}
