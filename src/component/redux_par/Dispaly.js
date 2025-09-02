import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delAction } from './Action'
import { edtAction } from './Action'


export default function Dispaly() {
    const data = useSelector((store) => store.todo)

    const dispatch=useDispatch()

    function handledel (i) {
        dispatch(delAction(i))
                
    }
    function handleedt (i) {
        var newValue =prompt("enter the name")
        if (newValue) {
            dispatch(edtAction(i,newValue))
            
        }
                
    }
  return (
    <div>
        {
            data.map((el,i)=>{
                return<>
                <li>{el}</li>
                <button onClick={()=>handledel(i)}>del</button>
                <button onClick={()=>handleedt(i)}>edt</button>
                </>
            })
        }
        
    </div>
  )
}
