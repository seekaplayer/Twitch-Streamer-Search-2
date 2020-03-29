import React from "react";
import TwitchPlayer from "./TwitchPlayer";

const Profile = ({ profileData, isLive }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          {isLive ? (
            <TwitchPlayer username={profileData.display_name} />
          ) : (
            "You're not live!"
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4"></div>
        <div className="col-8">{profileData.description}</div>
      </div>
    </>
  );
};

export default Profile;
