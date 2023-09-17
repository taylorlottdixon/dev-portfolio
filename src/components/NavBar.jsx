import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBar() {
    const location = useLocation();
   
    return (
        <header className="App-nav">
            <motion.a 
                href='/home' 
                className={location.pathname === '/home' ? "active" : "inactive"}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: .2 },
                }}
                whileTap={{ scale: 0.9 }}>
            Home
            </motion.a>
            <a href='/about' className={location.pathname === '/about' ? "active" : "inactive"}>About</a>
            <a href='/projects' className={location.pathname === '/projects' ? "active" : "inactive"}>Projects</a>
            <a href='/skills' className={location.pathname === '/skills' ? "active" : "inactive"}>Skills</a>
            <a href='/experience' className={location.pathname === '/experience' ? "active" : "inactive"}>Experience</a>
            <a href='/certifications' className={location.pathname === '/certifications' ? "active" : "inactive"}>Certifications</a>
            <a href='/contact' className={location.pathname === '/contact' ? "active" : "inactive"}>Contact</a>
        </header>
    )
}