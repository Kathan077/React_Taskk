import React from 'react'

 const Count = (props) => {
  return (
    <div>
        <h2>Count {props.count}</h2>
        <button onClick={props.inc}>+</button>
        <button onClick={props.dec}>-</button>
    </div>
  )
}
export default Count