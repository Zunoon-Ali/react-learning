import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className='bg-blue-500 p-4 text-white flex justify-center items-center gap-5 min-h-[10vh] w-full'>
                <ul className='flex gap-5'>
                    <li>
                        <NavLink className={(e)=>e.isActive ? "bg-white text-red-500 p-2" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={(e)=>e.isActive ? "bg-white text-red-500 p-2" : ""} to="/about">About</NavLink>
                    </li>

                    <li>
                        <NavLink className={(e)=>e.isActive ? "bg-white text-red-500 p-2" : ""} to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={(e)=>e.isActive ? "bg-white text-red-500 p-2" : ""} to="/user">User</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
