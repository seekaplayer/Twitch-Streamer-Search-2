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
            <img
              className="img-fluid"
              src={
                profileData.video_banner
                  ? profileData.video_banner
                  : "/images/twichdefaultbg.jpg"
              }
            />
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 order-2 order-md-1">
          <img
            className="rounded-circle img-fluid profile_image mx-auto"
            src={profileData.logo}
          />
        </div>
        <div className="col-md-8 order-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">
                {profileData.display_name}
                {profileData.partner && (
                  <img className="verified_badge" src="/images/verified.png" />
                )}
              </h2>

              <hr />
              <p>{profileData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
