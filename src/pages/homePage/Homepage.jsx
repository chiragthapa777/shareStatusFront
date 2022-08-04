import React from 'react'
import Posts from '../../components/post/Posts'
import CopyRight from '../../components/copyright/CopyRight'

export default function Homepage() {
  return (
    <div className='Homepage flex justify-center'>
      <Posts />
      <div className='w-[320px]'>
      <CopyRight />
      </div>
    </div>
  )
}
