import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import "./NavBarMobile.css"

export default function NavBarMobile() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
    
    return (
        <header className="Mobile-nav">
            <button
                className="toggle"
                onClick={() => setNavbarOpen((prev) => !prev)}
            >
                {navbarOpen ? 'close' : 'open'}
            </button>
            <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                <li><a href='/about' className={location.pathname === '/about' ? "active" : "inactive"}>About</a></li>
                <li><a href='/projects' className={location.pathname === '/projects' ? "active" : "inactive"}>Projects</a></li>
                <li><a href='/skills' className={location.pathname === '/skills' ? "active" : "inactive"}>Skills</a></li>
                <li><a href='/experience' className={location.pathname === '/experience' ? "active" : "inactive"}>Experience</a></li>
                <li><a href='/contact' className={location.pathname === '/contact' ? "active" : "inactive"}>Contact</a></li>
            </ul>
        </header>
    )
}