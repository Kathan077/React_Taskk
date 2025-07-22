import React,{useState} from 'react'
import  Count  from './Count'

 const Show = () => {
    const [count, setCount] = useState(0);

    const increment=()=>setCount(count+1)
    const decrement=()=>{
        if (count>0) {
            setCount(count-1)
            
        }
    }

  return (
    <div>
        <Count
        count={count}
        inc={increment}
        dec={decrement}/>


    </div>
  )
}
export default Show