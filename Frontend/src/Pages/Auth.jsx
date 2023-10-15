import React, { useState } from "react";
import Login from "../comopnents/login/login";
import Signup from "../comopnents/login/signup";

const Auth = () => {
  const [token, setToken] = useState("");

  return (
    <div>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Signup />
        </>
      ) : (
        <div>
          <h2>Welcome</h2>
          {/* Display other components or features for authenticated users */}
        </div>
      )}
    </div>
  );
};

export default Auth;
