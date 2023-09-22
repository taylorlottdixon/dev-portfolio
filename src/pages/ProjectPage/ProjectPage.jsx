import React from 'react';
import { motion } from "framer-motion";
import "./ProjectPage.css"

export default function ProjectPage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <h1>Projects</h1>
            <div className='projects-tiles'>
                <a href='https://my-entertainment-center-e89b41a797a6.herokuapp.com/' target="_blank" rel="noreferrer">
                    <img className='project-tile' src='mec.png' alt='My Entertainment Center' />
                </a>
                <a href='https://intense-hollows-35200-9cd88094a7e4.herokuapp.com/' target="_blank" rel="noreferrer">
                    <img className='project-tile' src='adventurejournal.png' alt='Adventure Journal' />
                </a>
                <a href='https://taylorlottdixon.github.io/mastermind/' target="_blank" rel="noreferrer">
                    <img className='project-tile' src='cupcakemaster.png' alt='Cupcake Master' />
                </a>
            </div>
        </motion.div>
    )
}