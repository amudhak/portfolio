import React from 'react'
import Navbar from '/components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2a9d8f_100%)]"></div>      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App;