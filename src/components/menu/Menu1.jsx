import "./Menu1.css";

const menuItems = [
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" },
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" },
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" },
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" },
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" },
  // { title: "Etiam dictum Nunc enim", desc: "Vivamus sit amet felis", price: "$19.9" }
];

function Menu1() {
  const {Food_list} = useContext(MyContext)
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
                <div key={index} className="menu-item">
                  <h3 className="dish-name">{item.title}</h3>
                  <p className="dish-desc">{item.desc}</p>
                  <span className="dish-price">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="menu-column">
              {rightItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <h3 className="dish-name">{item.title}</h3>
                  <p className="dish-desc">{item.desc}</p>
                  <span className="dish-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu1;
