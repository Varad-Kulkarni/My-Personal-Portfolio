import React from 'react'
import './Home.css'
import blue_design from '../../assets/blue_design.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <p className="p-container"><span id="p1">HI,</span> <span id="p2"> MY</span> <span id="p3"> NAME</span> IS<span id="p4"> VARAD</span>  <span id="p5"> KULKARNI.....</span></p>
        <p className="p-container"><span id="p6"> WELCOME</span> <span id="p7"> TO</span> <span id="p8"> MY</span> <span id="p9"> PORTFOLIO!</span></p>
      </div>

      <img src={blue_design} alt="" className="img-container"/>
    </div>
  )
}

export default Home