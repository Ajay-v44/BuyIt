import React,{useContext, useState} from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const NavBar = () => {
  const [menu, setmenu] = useState("")
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>BuyIt</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setmenu("shop")}}  > <Link to='/'>Shop</Link> {menu==="shop"? <hr />:<></>}</li>
            <li onClick={()=>{setmenu("men")}}> <Link to='/mens'>Men</Link>{menu==="men"? <hr />:<></>}</li>
            <li onClick={()=>{setmenu("women")}}><Link to='/womens'>Women</Link>{menu==="women"? <hr />:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"? <hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
<Link to='/login'><button>Login</button></Link> 
<Link to='/cart'><img src={cart_icon} alt="" /></Link>
<div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default NavBar