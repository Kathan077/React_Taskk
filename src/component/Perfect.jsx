import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Perfect() {
    const[state,setState]=useState({
        name:'',
        age:'',
        img:''
    })

    useEffect(()=>{

    })

    function dataFetch() {
        fetch('https://randomuser.me/api').then((res)=>{

       return res.json()

        }).then((data)=>{
            setState({
                name:data.results[0].name.first,
                age:data.results[0].dob.age,
                img:data.results[0].pic.medium            })


        })
        
    }
  return (
    <div>
        
    </div>
  )
}
