import React from 'react'
export default class Class extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render() {
      return (
        <div>
              <h2>{this.state}</h2>
              <button onClick={()=>setCount(count+1)}>Inc</button>
              
        </div>
      )
    }
  }
 