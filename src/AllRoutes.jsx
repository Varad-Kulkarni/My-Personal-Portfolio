import { Routes, Route } from 'react-router-dom';
import React from 'react'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Projects' element={<Projects />} />

      {/* <Route path='/Codechef' component={() => {
        window.location.href = 'https://www.codechef.com/users/triple_123';
        return null;
      }} /> */}
    </Routes>
  )
}

export default AllRoutes