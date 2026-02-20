import { useEffect, useState } from "react";
import "./Navbar.css";
import  logo from '../assets/assets/logo.png'
import { Link } from 'react-router-dom'
import ImageSlide from "./ImageSliders/ImageSlide.jsx";



function Navbar() {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setShow(currentScroll <= lastScrollY);
      setScrolled(currentScroll > 20);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${show ? "" : "hide"} ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo-img" />
        <span className="logo-text">POLO</span>
      </div>
      <div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/home">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/menu">Menu</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </div>
      <div className={`hamburger ${menuOpen ? "open" : ""}`} 
           onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <ImageSlide />
      </div>

    </nav>
  );
}

export default Navbar;