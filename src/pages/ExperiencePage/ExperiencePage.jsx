import React from 'react';
import { motion } from "framer-motion";
import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
        <motion.div 
            className='home'
        //   style={}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <h1>Experience</h1>
            <div className='jobs-tile'>
                <h3 className='job-title'>Freelance Graphic Designer</h3>
                <p className='employer'>Self-employed</p>
                <p className='dates'>May 2022 - Present</p>
                <ul className='description'>
                    <li>Created images and publications for several organizations and individuals</li>
                    <li>Researched industry standards and best practices for each project an organization requested</li>
                    <li>Collaborated with professionals in various positions and industries to tailor each project to the needs of the organization</li>
                </ul>
            </div>
            <div className='jobs-tile'>
                <h3 className='job-title'>Administrative Coordinator</h3>
                <p className='employer'>My Pure Delivery</p>
                <p className='dates'>Nov 2020 - Dec 2022</p>
                <ul className='description'>
                    <li>Promoted from Administrative Assistant to Lead Administrative Assistant to Administrative Coordinator, based on exemplary performance of organization, leadership, and innovation</li>
                    <li>Built a new customer database using a CRM in order to centralize and organize patient information</li>
                    <li>Collaborated with department heads resulting in process improvement and improved morale</li>
                    <li>Maintained thorough records and training documentation to improve onboarding and training</li>
                </ul>            </div>
            <div className='jobs-tile'>
                <h3 className='job-title'>Office Manager</h3>
                <p className='employer'>University of Oklahoma - Dept of Political Science</p>
                <p className='dates'>Jul 2017 - Aug 2018</p>
                <ul className='description'>
                    <li>Assist faculty with travel arrangements, event planning, expense reports, etc.</li>
                    <li>Records management for students, faculty, and staff</li>
                    <li>Reconcile state accounts, accounts payable, and purchasing</li>
                    <li>Reception duties and general office management</li>
                </ul>
            </div>
        </motion.div>
    )
}