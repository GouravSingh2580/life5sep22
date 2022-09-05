import React, {useEffect} from 'react'

export default function Counter({number}){
  useEffect(()=>{
    console.log("yo")
  })
  return (
    <h1>{number}</h1>
  )
}