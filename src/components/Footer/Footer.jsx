import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-tag">POLO</p>
            <h2>Fresh flavors, colorful moments, and warm dining experiences.</h2>
            <p>
              Crafted for food lovers who enjoy bold taste, cozy vibes, and a
              table full of memories.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h3>Visit Us</h3>
            <p>POLO Restaurant</p>
            <p>Open Daily: 10:00 AM - 11:00 PM</p>
            <p>Call: +91 98765 43210</p>
            <p>Email: hello@polorestaurant.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright {year} POLO. Made with flavor and color.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
