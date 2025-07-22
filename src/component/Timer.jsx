import React, { useState,useRef } from 'react'

export const Timer = () => {
    const[state,setState]=useState(0)
    const id=useRef(0)
    console.log(id);
    function start() {
        id.current=setInterval(() => {
            setState((prevState)=>prevState+1)
            console.log(id.current);
            
        }, 1000);
        
    }

    function stop() {
        clearInterval(id.current)
        
    }
  return (
    <div>
        <h1>Timer is{state}</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
    </div>
  )
}
