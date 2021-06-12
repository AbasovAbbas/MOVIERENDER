import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className = 'navbar navbar-expand bg-light navbar-light '>
            <Link to = '/' className= 'navbar-brand'>Movies Form</Link>
                <div className = 'navbar-nav'>
                    <NavLink className = 'nav-item nav-link' to = '/movies'>Movies</NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/customers'>Customers</NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/rentals'>Rentals</NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/login'>Login</NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/register'>Register</NavLink>
                </div>
        </nav>
        
    )
}
export default Navbar;