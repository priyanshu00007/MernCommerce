import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('Shop');

  return (
    <div className='Navbar'>
      <div className='navlogo'>
        <img src={logo} alt='Shopper Logo' />
        <p>Shopper</p>
      </div>
      <ul className='nav_menu'>
        <li onClick={() => setMenu('Shop')}>
          <Link to='/'>Shop</Link>
          {menu === 'Shop' && <hr />}
        </li>
        <li onClick={() => setMenu('Mens')}>
          <Link to='/Mens'>Mens</Link>
          {menu === 'Mens' && <hr />}
        </li>
        <li onClick={() => setMenu('Womens')}>
          <Link to='/Womens'>Womens</Link>
          {menu === 'Womens' && <hr />}
        </li>
        <li onClick={() => setMenu('Kids')}>
          <Link to='/Kids'>Kids</Link>
          {menu === 'Kids' && <hr />}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/Login'><button className='button type1'><span className='btn-txt'> Login </span></button></Link>
        <Link to='/Cart'><img src={cart} alt='Cart' className='text-white' /></Link>
        <div className='nav_cart_count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
