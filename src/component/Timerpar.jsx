import React, { useRef ,useState } from 'react'

export const Timerpar = () => {
    const[state,setState]=useState(0)
    const id=useRef(0)
    console.log(id);
   function star() {
    id.current=setInterval(() => {
        setState((prevState)=>prevState+1)
        console.log(id.current);
        
    }, 1000);
    
   }
   function stop() {
    clearInterval(id.current)
    
   }
   function close() {
    setState(0)
    
   }
    

  return (
    <div>
        <h1>time{state}</h1>
        <button onClick={star}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={close}>stop</button>
    </div>
  )
}
