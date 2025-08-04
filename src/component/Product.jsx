import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Product() {
    return (
        <div>
            <div>
                <h1>Product</h1>
                <Link to="Electronic">Elec</Link>
                <Link to="Jewellery">Jewellery</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}