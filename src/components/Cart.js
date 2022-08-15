import React, { useContext } from 'react'
import { CartContext } from '../context/Context'
import ShoppingItem from './ShoppingItem'

const Cart = () => {
         const [cart] = useContext(CartContext)
         console.log(cart)
         return (
    <div>
       
      {
          cart.map((item)=> (
             <ShoppingItem item={item}/>
          ))
          
        
      } 
        
       
    </div>
  )
}

export default Cart