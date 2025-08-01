import React from 'react'
import { useState } from 'react'

export const Multiple_input_tudu = () => {
    const [state, setState] = useState({ 
        name: "",
         email: "" ,
         age:"",
        
    })
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    function handleText(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }
      
  return (
    <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="name" placeholder="Name" value={state.name} onChange={handleText}
                />
                <input
                    type="email"  name="email"placeholder="Email"  value={state.email}onChange={handleText}
                />
                <input type="age" name="age" value={state.age}onClick={handleText} />
                <input type="submit" value={editIndex === null ? "Add" : "Update"} />
            </form>
            <ul>
                {list.map((el, i) => (
                    <li key={i}>
                        <span>{el.name}</span> - <span>{el.email}</span>
                        <button onClick={() => handleDelete(i)}>Delete</button>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
  )
}
