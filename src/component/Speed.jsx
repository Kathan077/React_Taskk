import React, { useEffect, useRef, useState } from 'react'

export default function Speed() {
  const [text,setText]=useState('');
  const [wpm,setWpm]=useState(0);
  const [second,setSeconds]=useState(0);
  const [show,setshow]=useState(false)
  const timer = useRef(null);

  function handlechange(e){
   setText(e.target.value);
   if(!timer.current){
    timer.current=setInterval(()=>{
      setSeconds(s => s + 1);
    },1000);
   }
  }
  function handleSubmit() {
 
    
  }
  setTimeout(() => {
    setshow(false)
    setText('')

  }, 10000);
  
  useEffect(()=>{
    const words = text.trim().split().length;
    if(second>0){
      setWpm(Math.round((words/second)*60))
    }
  },[])
 
    
  const char = text.replace().length;
  return (
    <div>
      <textarea value={text} onChange={handleSubmit}  ></textarea>

      <button onSubmit={handleSubmit}>submit</button>
      <p>WPM: {wpm} </p>
      <p>Charecter: {char} </p>
      <p>Time: {second} </p>
    </div>
  )
}