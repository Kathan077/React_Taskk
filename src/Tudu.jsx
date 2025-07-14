import React, { useState } from 'react'

const Tudu = () => {
    const [state,setState] = useState('')
    const [text, setText] = useState([])
    const[edit,  setEdit]=useState(null)

    function addText(e) {
        setState(e.taget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (edit!==null) {
          const upadteText=[...text]
          upadteText[edit]=state
          setText(upadteText)
          setEdit(null)
          
        }
        else{
          setText([...text,state])
        }
        setState('')
     
        
    }

    function handleDelete(i){
        var newArr=[...text]
        newArr.splice(i,1)
        setText(newArr)  
    }
    function handleedt(i) {
      setState(text[i])
      setEdit(i)


      
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={state} onChange={addText} />
                <input type="submit" />
            </form>
            <p>{
                text.map((el, i) => {
                    return <>
                        <li>{el}</li>
                        <button onClick={()=>handleDelete(i)}>Del</button>
                        <button onClick={()=>handleedt(i)}>edt</button>
                    </>

                })
            }</p>
        </div>
    )
}

export default Tudu




// import React, { useState } from 'react'

// const Tudu = () => {
//     const[state,setState]=useState('')
//     const[text,setText]=useState([])
//     function addTesxt(e) {
//         setState(e.target.value)
        
//     }
//     function submitt(e) {
//         e.preventDefault() 
//         setText([...text,state])
//         console.log(text);
//     }
//   return (
//     <div>
//  <form onSubmit={submitt}>
//     <input type="text" name="name" onChange={addTesxt}/>
//     <input type="submit"  />
//  </form>
//  <p>
//     {
//       text.map((el,i)=>{
//         return <li>{el}</li>
//       })
//     }
//  </p>
//     </div>
//   )
// }
//  export default Tudu