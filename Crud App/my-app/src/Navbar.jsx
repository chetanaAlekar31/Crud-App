import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>



            <nav className="navbar navbar-expand-lg bg-dark fw-bold text-light">

                <a href="" className='navbar-brand mx-3' ><h2 className='text-warning fw-bold'>CRUD APP</h2></a>

                <ul className='navbar-nav m-auto'>
                    <li className='nav-item fw-bold'><NavLink to="/" className="nav-link text-light mx-4">Home</NavLink></li>
                    <li className='nav-item fw-bold'><NavLink to="/userdata" className="nav-link text-light">User Data</NavLink></li>
                </ul>

            </nav>



        </>
    )
}

export default Navbar