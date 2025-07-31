import React from 'react'

export default function Userlist({user}) {
  return (
    <div>
      {
        user.map((u)=>{
            return <li>{u.name}</li>
        })
      }
    </div>
  )
}