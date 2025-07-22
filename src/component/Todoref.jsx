import React,{useRef} from 'react'

export const Todoref = () => {
const nameref=useRef(null)
const emailref=useRef(null)
const displayref=useRef()
const countt=useRef(0)



function handlesubmit(e) {
    e.preventDefault()
    let name=nameref.current.value
    let email=emailref.current.value
    displayref.current.innerHTML=`
    <p>${name}</p>
    <p>${email}</p>
    <p>Submitted ${countt.current} times</p>
    `
    countt.current += 1;
//  console.log(name);
//  console.log(email);

    
}
  return (
    <div>
        <form  onSubmit={handlesubmit}>
        <input type="text"name="name" ref={nameref} />
        <input type="email"name="email" ref={emailref} />
        <input type="submit" />
        <p ref={displayref}></p>
        </form>
    </div>
  )
}
