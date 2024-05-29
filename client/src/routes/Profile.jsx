import React from "react";
import { UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <div className="profile-main">
      <UserProfile />
    </div>
  );
};

export default Profile;
