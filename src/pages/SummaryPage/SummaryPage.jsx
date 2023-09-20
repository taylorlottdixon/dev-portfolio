import React from 'react';
import { motion } from "framer-motion";
import "./SummaryPage.css"

export default function SummaryPage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <h1>About Me</h1>
            <p className='aboutme-text'>I am an end-user oriented software engineer with a natural knack for design. Through my background in administrative management, I bring a proven track record of game-changing process improvement. My love of problem-solving fuels me to create intuitive programs that allow the user to customize their experience to fit their unique needs.</p>
        </motion.div>
    )
}