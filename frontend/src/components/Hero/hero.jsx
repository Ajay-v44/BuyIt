import React from 'react'
import './heo.css'
import hand_icon from'../Assets/hand_icon.png'
import arrow from'../Assets/arrow.png'
import hero_image from'../Assets/hero_image.png'
const hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
        </div>
      
    <p>Collection</p>
    <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
      <div>
        <div>Latest Collection</div>
        <img src={arrow} alt="" />
      </div>
    </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default hero