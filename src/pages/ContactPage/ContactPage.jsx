import React from 'react';
import { motion } from "framer-motion";

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
        </motion.div>
    )
}