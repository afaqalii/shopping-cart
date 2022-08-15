import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Context'


const ShoppingItem = ({item}) => {
 
    const [cart, setCart] = useContext(CartContext)     
  
   const AddToCart = () => {
      setCart([...cart, {...item}])
   } 

   const removeItem = () => {
      setCart(cart.filter((product) => {
         return !product== product.id
      }))
      
   }
   
    
  return (
    <div className='item'>
       <img src={item.img} alt="Shopping Item"/>
       <h4>{item.title}</h4>
       <div className="item-detail">
          <p>${item.price}</p>
          <p>{item.author}</p>
       </div>
       {cart.includes(item)?
       (<button onClick={removeItem}>Remove From Cart</button>)
       :(<button onClick={AddToCart}>Add to cart</button>)
    }
    </div>
  )
}

export default ShoppingItem