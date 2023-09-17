import React from 'react';
import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Experience</h1>
        </motion.div>
    )
}