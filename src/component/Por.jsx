import React, { useState } from 'react'
import { Porb } from './Porb'

export const Por = () => {
    const[state,setState]=useState({
        name:"ss",
        email:"ss@gmail.com"
    })
  return (
<div>
    <h1>hdkfwrhfgej</h1>
   <h1>{state.name}</h1>
   <Porb data={state}/>
</div>
    
  )
}
