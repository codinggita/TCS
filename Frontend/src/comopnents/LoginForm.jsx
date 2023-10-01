import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="form_div">
      <form action="">
        <input type="text" placeholder="Username" />
        <br />
        <input type="text" placeholder="Password" />
        <br />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default LoginForm;
