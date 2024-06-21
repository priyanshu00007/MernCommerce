import React from 'react'
import './hero.css'
import handicon from "../Assets/hand_icon.png"
import arrowicon from "../Assets/arrow.png"
import heroicon from "../Assets/hero_image.png"
const hero = () => {
  return (
    <div className='hero'>
      <div className="hero-Left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hand-hand-icon">
                <p>New</p>
                <img src={handicon} alt="" />
            </div>
        <p>Collection </p>
        <p>For everyone</p>
        </div>
        <div className="hero-Latest-button">
            <div>Latest Collection</div>
            <img src={arrowicon} alt="" />
        </div>
      </div>
      <div className="hero-Right">
    <img src={heroicon} alt="" />
    
      </div>
    </div>
  )
}

export default hero
