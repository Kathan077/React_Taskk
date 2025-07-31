import React, { useState } from 'react'

export const Nnewtodo = () => {
    const [state,setState]=useState("")
    const [text,setText]=useState([])
    const[edit,setEdit]=useState(null)




    function handlesubmit(e) {
        e.preventDefault()
        if(edit!== null){
            const updatedText=[...text]
            updatedText[edit]=state
            setText(updatedText)
            setEdit(null)

        }
       else{
        setText([...text,state])
       }
       setText('')
        
    }


    function handleedt(i) {
        setState(text[i])
        setEdit(i)
        
    }



    function addtext(e) {
        setState(e.target.value)
        
    }
    function handledel (i) {
        const newarr=[...text]
        newarr.splice(i,1)
        setText(newarr)
        
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" onChange={addtext} />
            <input type="submit" />
        </form>
        <p>
            {
                text.map((el,i)=>{
                   return <>
                   <li>{el}</li>
                   <button onClick={()=>handledel(i)}>del</button>
                   <button onClick={()=>handleedt(i)}>edt</button>
                    </>

                })
            }
        </p>

    </div>
  )
}
