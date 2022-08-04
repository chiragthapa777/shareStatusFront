import React from 'react'
import {  useParams } from 'react-router-dom';


export default function Byid() {
  let { id } = useParams();

  return (
    <div>id is {id}</div>
  )
}

