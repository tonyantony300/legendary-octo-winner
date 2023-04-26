import React from 'react'

export default function child({num, add}) {
  return (
    <h1>child
         <div>{num}</div>
         <button onClick={add}>add</button>
    </h1> 
  )
}
