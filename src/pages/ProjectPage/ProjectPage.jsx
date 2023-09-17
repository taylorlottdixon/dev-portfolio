import React from 'react';
import { motion } from "framer-motion";

export default function ProjectPage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Projects</h1>
        </motion.div>
    )
}