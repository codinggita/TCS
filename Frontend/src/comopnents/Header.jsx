import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      {/* <div className="navbar">
        <nav> */}
      <a href="/">Home</a>
      <a href="/">Service</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      {/* </nav> */}
      <button>Login | Register</button>
      {/* </div> */}
    </header>
  );
};

export default Header;
