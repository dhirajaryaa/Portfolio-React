import React, { useEffect } from 'react';
import "./App.css"
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  const favicon = document.getElementById("favicon");
  useEffect(() => {
    const handleTabFocus = () => {
        document.title = 'Portfolio : Dhiraj Arya';
        favicon.href = "./favicon.ico"
    };
    const handleTabBlur = () => {
        document.title = 'We Miss You,back on portfolio';
        favicon.href = "./back.ico"
    };

    window.addEventListener('focus', handleTabFocus);
    window.addEventListener('blur', handleTabBlur);

    return () => {
        // Clean up event listeners when the component unmounts
        window.removeEventListener('focus', handleTabFocus);
        window.removeEventListener('blur', handleTabBlur);
    };
}, []);
  return (
    <>

    <Header />
    <Hero />
    <About />
    < Skills />
    </>
  )
}

export default App