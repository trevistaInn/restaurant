import "./Features.css";
import { FaUtensils, FaWineGlassAlt, FaHamburger } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">

        <div className="feature-box">
          <GiChefToque className="feature-icon" />
          <h3>Unique Recipes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla varius consequat magna.
          </p>
        </div>

        <div className="feature-box">
          <FaUtensils className="feature-icon" />
          <h3>Fresh Food</h3>
          <p>
            Morbi sagittis, sem quis lacinia faucibus.
            Vel interdum mi sapien ut justo.
          </p>
        </div>

        <div className="feature-box">
          <FaWineGlassAlt className="feature-icon" />
          <h3>Drinks</h3>
          <p>
            Nulla varius consequat magna, id molestie quis.
            Vel interdum mi sapien ut justo.
          </p>
        </div>

        <div className="feature-box">
          <FaHamburger className="feature-icon" />
          <h3>Fastfood</h3>
          <p>
            Nulla varius consequat magna, id molestie quis.
            Vel interdum mi sapien ut justo.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;