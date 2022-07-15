import { Routes, Route } from 'react-router-dom';
import React from 'react'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Projects' element={<Projects />} />
    </Routes>
  )
}

export default AllRoutes