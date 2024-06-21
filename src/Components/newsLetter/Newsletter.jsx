import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers From your Email</h1>
      <p>Subscribe To  our News Letter  and Stay updated</p>
      <div>
        <input type="email"  placeholder='Enter Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
