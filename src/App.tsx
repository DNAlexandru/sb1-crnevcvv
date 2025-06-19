// src/App.tsx
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/"            element={<Home />}     />
          <Route path="/about"       element={<About />}    />
          <Route path="/services"    element={<Services />} />
          <Route path="/blog"        element={<Blog />}     />
          <Route path="/blog/:slug"  element={<BlogPost />} />
          <Route path="/contact"     element={<Contact />}  />
          <Route path="/terms"       element={<Terms />}   />
          <Route path="/privacy"     element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
