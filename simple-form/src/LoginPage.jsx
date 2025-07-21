import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Welcome, Log In!</h1>

        <form >
          <div className="section-wrapper" style={{textAlign: "left"}}>
            <label>
              Username:
              <br></br>
              <input type="text" placeholder="Enter Username" className="text-box" />
            </label>
          </div>
          <div className="section-wrapper" style={{textAlign: "left"}}>
            <label>
              Password:
              <br></br>
              <input type="password" placeholder="Enter Password" className="text-box"/>
            </label>
          </div>
          {/* On submit direct to the profile page */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
