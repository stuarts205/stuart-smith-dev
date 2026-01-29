import { useState } from 'react'
import { Hero } from '@/sections/hero'
import { About } from '@/sections/about'
import { Projects } from '@/sections/projects'
import { Experience } from '@/sections/experience'
import { Testimonials } from '@/sections/testimonials'
import { Contact } from '@/sections/contact'
import { Navbar } from '@/layout/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App
