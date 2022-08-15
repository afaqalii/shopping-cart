import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/Context'

const Navbar = () => {
     const [cart] = useContext(CartContext)
  return (
    <header>
       <NavLink to='/' ><h2>Shopping cart</h2></NavLink>
        <input type="text" placeholder='Search items' />
        <div className="cart-box">
        <NavLink to='cart'><h2>Cart</h2></NavLink>
        <span>{cart.length}</span>
        </div>
    </header>
  )
}

export default Navbar