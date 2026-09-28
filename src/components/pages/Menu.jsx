import { useState } from 'react';
import Menu2 from "../../components/Menu2/Menu2.jsx";
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../FoodDisplay/FoodDisplay.jsx';

function Menu() {
  const [category, setCategory] = useState("All");

  return (
    <div className="page">
      <Menu2 />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>

  );
}

export default Menu;
