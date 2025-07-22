import React, { useRef } from 'react'

export const Form_val = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const errorRef=useRef(null)
    const succesRef=useRef(null)
    const passRef=useRef(null)

    function handlSubmit(e) {
      e.preventDefault()
      const name=nameRef.current.value
      const email=emailRef.current.value

    const password=passRef.current.value
   


      if (!name||!email||!password) {
        errorRef.current.innerHTML='name the fill'
        succesRef.current.innerHTML=''
        
      }
     
      if (!/\S+@\S+\.\S+/.test(email)) {
        errorRef.current.innerText = " valid email address.";
        succesRef.current.innerText = "";
        return;
    }
    if (password.length < 6) {
      errorRef.current.innerHTML = 'Password 6 characters long.'
      succesRef.current.innerHTML = ''
      return
    }


      else{
        succesRef.current.innerHTML='succes'
        errorRef.current.innerHTML=''
            }
      
    }
    

  return (
    <div>
      <form onSubmit={handlSubmit}>
        <input type="text" placeholder='name' name="name" ref={nameRef} />
        <input type="email" placeholder='email' name="email" ref={emailRef} />
        <input type="password" placeholder='password'  name="password" ref={passRef} />
        <button type='submit'>submit</button>
        </form>
        <p ref={errorRef} ></p>
        <p ref={succesRef}></p>
    </div>
  )
}
