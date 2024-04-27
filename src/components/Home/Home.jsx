import React from 'react'
import './Home.css'

import coding_img from '../../assets/Home-code-transperant.png'
import settings_logo_animated from '../../assets/icons/settings-code-animated.gif'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <p className="home-text">HI, MY NAME IS VARAD KULKARNI.....</p>
        <p className="home-text">WELCOME TO MY PORTFOLIO!</p>
      </div>

      <img src={coding_img} alt="" className="img-container"/>
    </div>
  )
}

export default Home