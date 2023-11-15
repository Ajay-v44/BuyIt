import React from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>BuyIt</p>
        </div>
        <ul className='nav-menu'>
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
<button>Login</button>
<img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default NavBar