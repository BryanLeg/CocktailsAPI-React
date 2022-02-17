import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h2 className='title-navbar'>Navbar</h2>
            <Link className='link' to='/' >Home</Link>
            <Link className='link' to='/about'>About</Link>
        </nav>
    )
}

export default Navbar