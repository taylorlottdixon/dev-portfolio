import React from 'react';
import { motion } from "framer-motion";

export default function TitlePage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 }, }}
            exit={{ opacity: 0 }}
        >
            <h1>Taylor Dixon</h1>
            <h2>Software</h2>
            <h2>Engineer</h2>
        </motion.div>
    )
}