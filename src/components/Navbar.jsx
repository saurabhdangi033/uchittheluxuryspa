import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      {/* Top Info Bar */}
    <div className="top-bar">
  <div className="top-left">📧 uchittheluxuryspa@gmail.com</div>
  <div className="top-center">
    <marquee>🌟 Welcome to Uchit The Luxury Spa — +91 9179625864 | +91 9202853498 | +91 8269807884 🌿</marquee>
  </div>
  <div className="top-right">
    <a href="https://www.instagram.com/uchittheluxuryspa/"><FaInstagram /></a>
    <a href="https://www.facebook.com/profile.php?id=61569186301548"><FaFacebookF /></a>
    <a href="https://maps.app.goo.gl/MxYxq1Ha4rXErzBC8" target="_blank" rel="noopener noreferrer">
      <FaMapMarkerAlt />
    </a>
  </div>
</div>


      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/images/logo.jpg" alt="logo" className="logo" />
        </div>
        <div className="link-binder">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="navbar-right">
            <a href="tel:+919179625864" title="Call us">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
