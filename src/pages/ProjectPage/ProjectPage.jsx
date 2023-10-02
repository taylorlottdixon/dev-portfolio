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
                <a className='project-tile' href='https://my-entertainment-center-e89b41a797a6.herokuapp.com/' target="_blank" rel="noreferrer">
                    <h3>My Entertainment Center</h3>
                    <img className='project-img' src='mec.png' alt='My Entertainment Center' />
                    <p>a movie database where user can rate movies and shows with more granular advisory categories, such as violence, sexual content, and language</p>
                    <div className='project-skills'>
                        <img src='https://img.shields.io/badge/JavaScript-black?logo=javascript&logoColor=black&color=%23F7DF1E' alt='JavaScript' />
                        <img src='https://img.shields.io/badge/React-white?logo=react&logoColor=%2361DAFB&color=black' alt='React' />
                        <img src='https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=white&color=%23339933' alt='Node.js' />
                        <img src='https://img.shields.io/badge/MongoDB-white?logo=mongodb&logoColor=white&color=%2347A248' alt='MongoDB' />
                        <img src='https://img.shields.io/badge/HTML5-white?logo=html5&logoColor=white&color=%23E34F26' alt='HTML5' />
                        <img src='https://img.shields.io/badge/CSS3-white?logo=css3&logoColor=white&color=%231572B6' alt='CSS3' />
                    </div>
                </a>
                <a className='project-tile' href='https://intense-hollows-35200-9cd88094a7e4.herokuapp.com/' target="_blank" rel="noreferrer">
                    <h3>Adventure Journal</h3>
                    <img className='project-img' src='adventurejournal.png' alt='Adventure Journal' />
                    <p>a database for Game Masters of TTRPGs to keep notes in a cohesive library</p>
                    <div className='project-skills'>
                        <img src='https://img.shields.io/badge/JavaScript-black?logo=javascript&logoColor=black&color=%23F7DF1E' alt='JavaScript' />
                        <img src='https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=white&color=%23339933' alt='Node.js' />
                        <img src='https://img.shields.io/badge/MongoDB-white?logo=mongodb&logoColor=white&color=%2347A248' alt='MongoDB' />
                        <img src='https://img.shields.io/badge/HTML5-white?logo=html5&logoColor=white&color=%23E34F26' alt='HTML5' />
                        <img src='https://img.shields.io/badge/CSS3-white?logo=css3&logoColor=white&color=%231572B6' alt='CSS3' />
                    </div>
                </a>
                <a className='project-tile' href='https://taylorlottdixon.github.io/mastermind/' target="_blank" rel="noreferrer">
                    <h3>Cupcake Master</h3>
                    <img className='project-img' src='cupcakemaster.png' alt='Cupcake Master' />
                    <p>a mastermind-style game where you must guess the secret cupcake code in a certain number of turns</p>
                    <div className='project-skills'>
                        <img src='https://img.shields.io/badge/JavaScript-black?logo=javascript&logoColor=black&color=%23F7DF1E' alt='JavaScript' />
                        <img src='https://img.shields.io/badge/HTML5-white?logo=html5&logoColor=white&color=%23E34F26' alt='HTML5' />
                        <img src='https://img.shields.io/badge/CSS3-white?logo=css3&logoColor=white&color=%231572B6' alt='CSS3' />
                    </div>
                </a>
            </div>
        </motion.div>
    )
}