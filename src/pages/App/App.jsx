import './App.css';
import React, { useState, useEffect } from 'react';
import AnimatedRoutes from '../../components/AnimatedRoutes';
import NavBar from '../../components/NavBar';
import NavBarMobile from '../../components/NavBarMobile';

export default function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isMobile, setMobile] = useState(window.innerWidth < 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <div className='App-body'>
        <AnimatedRoutes />
        {isDesktop && <NavBar />}
        {isMobile && <NavBarMobile />}
      </div>
    </div>
  );
}