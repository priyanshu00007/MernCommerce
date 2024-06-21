import React from 'react'
import "./offers.css"
import exclusiveimage  from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only in best Sellers Product</p>
        <button>Check now</button>
      </div>
      <div className="offers_Right">
        <img src={exclusiveimage} alt="" />
      </div>
    </div>
  )
}

export default Offers
