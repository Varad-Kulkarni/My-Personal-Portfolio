import React from 'react'
import './Home.css'

import coding_img from '../../assets/Home-code-transperant.png'
import settings_logo_animated from '../../assets/icons/settings-code-animated.gif'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <p>HI, MY NAME IS VARAD KULKARNI.....</p>
        <p>WELCOME TO MY PORTFOLIO!</p>
        <p><img src={settings_logo_animated} alt="" /></p>
      </div>

      <img src={coding_img} alt="" className="img-container"/>
    </div>
  )
}

export default Home