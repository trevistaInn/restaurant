import { useContext } from "react";
import { MyContext } from "../Context/Context.jsx";
import "./Menu1.css";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Bread Sandwich", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" },
  { title: "Jar Ice Cream", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" },
  { title: "Vanilla Ice Cream", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" },
  { title: "Grilled Sandwich", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" },
  { title: "Chicken Rolls", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" },
  { title: "Cheese Pasta", desc: "Food provides essential nutrients for overall health and well-being", price: "$19.9" }
];

function Menu1() {
  const {Food_list} = useContext(MyContext);
  // Split menuItems into two columns
  const mid = Math.ceil(menuItems.length / 2);
  const leftItems = menuItems.slice(0, mid);
  const rightItems = menuItems.slice(mid);

  return (
    <section className="menu-section">
      <div className="menu-overlay">
        <div className="menu-wrapper">
          <h2 className="menu-heading">MENU</h2>
          <div className="menu-columns">
            <div className="menu-column">
              {leftItems.map((item, index) => (
                <Link to="/menu" key={index}  className="menu-item">
                <div key={index}>
                  <h3 className="dish-name">{item.title}</h3>
                  <p className="dish-desc">{item.desc}</p>
                  <span className="dish-price">{item.price}</span>
                </div>
                </Link>
              ))}
            </div>
            <div className="menu-column">
              {rightItems.map((item, index) => (
                <Link to="/menu" key={index}  className="menu-item">
                  <div key={index}>
                    <h3 className="dish-name">{item.title}</h3>
                    <p className="dish-desc">{item.desc}</p>
                    <span className="dish-price">{item.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu1;
