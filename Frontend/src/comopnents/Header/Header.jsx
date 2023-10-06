import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import logo from "";

const Header = ({ logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resposivNav, setResponsiveNav] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setResponsiveNav(!resposivNav);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/package">Package</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button>Login | Register</button>
        <div className="hamburger">
          <div onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon w={30} h={30} color="#4e60ff" />
            ) : (
              <HamburgerIcon w={30} h={30} color="#4e60ff" />
            )}
          </div>
        </div>
      </header>
      <nav className={resposivNav ? "responsive_nav" : "responsive_nav_none"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/package">Package</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
