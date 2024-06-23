import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
     
    </main>
    <Footer />
    <Scrollup />
    

    </>
  )
}

export default App