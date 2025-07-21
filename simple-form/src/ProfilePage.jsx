import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

//   After the login the user will be taken Headers, the django will send the info to display

  return (
    <><div>
          <h1>Your Profile Page!</h1>
          {/* src will come from the django image file saved */}
          <img src="" alt="profile image" />
          <p>Take the Major Quiz <a href="">Here</a></p>
    </div>
    </>
  );
}

export default ProfilePage;
