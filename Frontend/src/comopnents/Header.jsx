import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../Assets/logoPNG.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <Link to="/">Home</Link>
      <Link to="/register">Signup</Link>
      <Link to="/login">Login</Link>

      <button>Login | Register</button>
      <div className="hamburger">
        <div onClick={toggleMenu}>
          <HamburgerIcon w={30} h={30} color="#4e60ff" />

          <CloseIcon w={30} h={30} color="#4e60ff" />
          {/* <div className="bar">Home</div>
          <div className="bar">About</div>
          <div className="bar">Contact</div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
