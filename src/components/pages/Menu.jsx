import React from 'react';
import "../../components/Menu2/Menu2.jsx"
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../FoodDisplay/FoodDisplay.jsx';
import FoodItems from '../FoodItems/FoodItems.jsx';

// import FoodItems from '../../components/FoodItems/FoodItems.jsx';
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
function Menu() {
  return (
    <div className="page">
      <div className="Menu-header">
        <h1>Our Menu </h1>
        <p>Discover our delicious selection of dishes</p>
      </div>
  
        <ExploreMenu />
        <FoodDisplay/>
        <FoodItems/>
        

     
    </div>

  );
}

export default Menu;
