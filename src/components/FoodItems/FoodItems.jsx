import React,{useState} from 'react'
import {assets} from '../../assets/assets/assets.js'
import './FoodItems.css'
const FoodItems = ({name,price,description,image}) => {
    // eslint-disable-next-line no-unused-vars
    const [itemsCount,setItemsCount] = useState(0);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className ='food-item-image' src={image} alt =""/>
          {/* /*  {!itemsCount ? */}
            {/* <img className = 'add' onClick={()=> setItemsCount(prev => prev + 1)} src={assets.add_icon_white} alt=""/> */}
            

        </div>
        <div className="food-item-info">
           <div className="food-item-name-rating">
            <p>{name}</p>
            <img src ={assets.rating_starts} alt =""/>
            </div> 
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
        

        
    </div>
  )
}

export default FoodItems
