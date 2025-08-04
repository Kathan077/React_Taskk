import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Parta() {
  return (
    <div>
      <div>
        <Link to="Show" >Show</Link>
        <Link to="Login" >Login</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
