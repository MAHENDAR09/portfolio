import { useState } from 'react'

import './App.css'

import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Experience from './Experince'
import Projects from './Project'
import Education from './Education'
import Contact from './Contact'



function App() {

  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>

    </div>
  )
}

export default App
