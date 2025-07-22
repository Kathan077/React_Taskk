import React, { useState } from 'react'


export const Par = () => {
  const[state,setState]=useState({
    name:'',
    email:''
  })
  const[text,setText]=useState([])
  function addtext(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  
function handlesub (e) 
{
  e.preventDefault()
  setText([...text,state])
  
}
function handledel(i) {
  const newarr=[...text]
 newarr.splice(i,1)
 setText(newarr)  
}

  return (
    <div>
      <form onSubmit={handlesub}>
        <input name='name' type="name" value={state.name} onChange={addtext}/>
        <input name='email' type="email"value={state.email} onChange={addtext}/>
        <input type="submit" />
      </form>
      <p>
        {
          text.map((el,i)=>{
          
          return <>
          <li key={i}>
            name:{el.name},email:{el.email}
          </li>
          <button onClick={()=>handledel(i)}>del</button>
          </> 
          })
        }
      </p>
    </div>
  )
}
//  