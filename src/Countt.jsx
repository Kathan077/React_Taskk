import React, { Component } from 'react'
export default class Countt extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    
  
 addnum = (e) =>  {
    const value=(e.target.value)
   
    }
    render() {
      return (
        <div>
              <h2>{this.state.count}</h2>
              <button onClick={()=> this.setState({count:this.state.count+1})}>Inc</button>
             
        </div>
      )
    }
  }


 