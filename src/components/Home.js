import React from 'react'
import ShoppingItem from './ShoppingItem'
import list from '../Data'

const Home = () => {



  return (
    <div className='shoppingcard'>
      {
        list.map((item) => (
           <ShoppingItem key={item.id}  item={item}/>
        ))
      }
    </div>
  )
}

export default Home