import React from 'react';
import './navbar.css'
function Navbar() {
    return (
        <div>
            <nav className='nav-container'>
                <h1>
                    MOVIES
                </h1>
                <ul className='list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar