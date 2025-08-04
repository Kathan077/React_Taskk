import React, { useState } from 'react'

export const Obj = (Props) => {
    const[Obj,setObj]=useState({
        name:"kathan",
        age:18
    })
  return (
    <div>


      <p>Name: {Props.name}</p>
      <p>Age: {Props.age}</p>
    
    </div>
  )
}
export default Obj