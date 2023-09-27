import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import "./NavBarMobile.css"
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

export default function NavBarMobile() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const location = useLocation();
    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
          if (
            navbarOpen &&
            ref.current &&
            !ref.current.contains(event.target)
          ) {
            setNavbarOpen(false);
          }
        };
        document.addEventListener('mousedown', handler);
        return () => {
          // Cleanup the event listener
          document.removeEventListener('mousedown', handler);
        };
      }, [navbarOpen]);
    
    return (
        <header ref={ref} className="Mobile-nav">
            <button
                className="toggle"
                onClick={() => setNavbarOpen((prev) => !prev)}
            >
                {navbarOpen ? (
                    <MdClose style={{ width: '32px', height: '32px', color: 'white' }} />
                ) : (
                    <FiMenu
                        style={{
                            width: '32px',
                            height: '32px',
                            color: 'white',
                        }}
                        />
                )}
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