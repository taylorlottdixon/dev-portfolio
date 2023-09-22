import React from 'react';
import { motion } from "framer-motion";
import "./SkillsPage.css"

export default function SkillsPage() {
    return (
        <motion.div 
            className='skills-page'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <h1>Skills</h1>
            <div className='skill-badges'>
                <img src='https://img.shields.io/badge/JavaScript-black?logo=javascript&logoColor=black&color=%23F7DF1E' alt='JavaScript' />
                <img src='https://img.shields.io/badge/Python-black?logo=python&logoColor=white&color=%233776AB' alt='Python' />
                <img src='https://img.shields.io/badge/React-white?logo=react&logoColor=%2361DAFB&color=black' alt='React' />
                <img src='https://img.shields.io/badge/MongoDB-white?logo=mongodb&logoColor=white&color=%2347A248' alt='MongoDB' />
                <img src='https://img.shields.io/badge/Mongoose-white?logo=mongoosedotws&logoColor=white&color=%23F04D35' alt='Mongoose' />
                <img src='https://img.shields.io/badge/Django-white?logo=django&logoColor=white&color=%23092E20' alt='Django' />
                <img src='https://img.shields.io/badge/Node.js-white?logo=nodedotjs&logoColor=white&color=%23339933' alt='Node.js' />
                <img src='https://img.shields.io/badge/Express-white?logo=express&logoColor=white&color=%23000000' alt='Express' />
                <img src='https://img.shields.io/badge/HTML5-white?logo=html5&logoColor=white&color=%23E34F26' alt='HTML5' />
                <img src='https://img.shields.io/badge/CSS3-white?logo=css3&logoColor=white&color=%231572B6' alt='CSS3' />
                <img src='https://img.shields.io/badge/Amazon%20S3-white?logo=amazons3&logoColor=white&color=%23569A31' alt='Amazon S3' />
            </div>
            <h2 className='studying'>Currently Studying</h2>
            <div className='skill-badges'>
                <img src='https://img.shields.io/badge/.NET-white?logo=dotnet&logoColor=white&color=%23512BD4' alt='.NET' />
                <img src='https://img.shields.io/badge/Amazon%20AWS-white?logo=amazonaws&logoColor=white&color=%23232F3E' alt='Amazon AWS' />
                <img src='https://img.shields.io/badge/C%20Sharp-white?logo=csharp&logoColor=white&color=%23512BD4' alt='C Sharp' />
            </div>
        </motion.div>
    )
}