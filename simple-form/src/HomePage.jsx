import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();

  return (
    <><div>
          <h1>Welcome to the Home Page!</h1>
          <button onClick={() => navigate("user-form") }  >
          Register
          </button>
          <button>Log In</button>
    </div>
    </>
  );
}

export default UserForm;
