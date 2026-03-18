import React, { useContext } from 'react'

import './FoodDisplay.css'
import { MyContext } from '../Context/Context'
import FoodItems from '../../components/FoodItems/FoodItems.jsx'


const FoodDisplay = () => {

    const {Food_list} = useContext(MyContext)
  return (
    
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
    <div className='food-display-list'>
        {Food_list.map((item, index) => {
            return <FoodItems key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
        })}
       </div>
      
    </div>
  )
}

export default FoodDisplay