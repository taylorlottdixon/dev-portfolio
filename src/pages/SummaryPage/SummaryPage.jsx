import React from 'react';
import { motion } from "framer-motion";

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
        </motion.div>
    )
}