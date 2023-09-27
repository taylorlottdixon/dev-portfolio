import React from 'react';
import { motion } from "framer-motion";
import "./ContactPage.css"

export default function ContactPage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <h1>Contact Me</h1>
            <div className='contact-buttons'>
                <a className='contact-btn' href='mailto:taylordixon.dev@gmail.com'><img className='gmail' height="32" width="32" src="https://cdn.simpleicons.org/gmail/white" alt="email" /> taylordixon.dev@gmail.com</a>
                <a className='contact-btn' href='https://www.linkedin.com/in/taylor-lott-dixon/'><img className='linkedin' height="32" width="32" src="https://cdn.simpleicons.org/linkedin/white" alt="linkedin" /> LinkedIn: taylor-lott-dixon</a>
                <a className='contact-btn' href='https://github.com/taylorlottdixon'><img className='github' height="32" width="32" src="https://cdn.simpleicons.org/github/white" alt="github" /> GitHub: taylorlottdixon</a>
            </div>
        </motion.div>
    )
}