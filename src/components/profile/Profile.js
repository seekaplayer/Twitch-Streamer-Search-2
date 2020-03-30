import React from "react";
import TwitchPlayer from "./TwitchPlayer";

const Profile = ({ profileData, isLive }) => {
  const JoinedTwitch = () => {
    const date = new Date(profileData.created_at);
    return date.getFullYear().toString();
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>
            Welcome to{" "}
            <a target="_blank" href={profileData.url}>
              {profileData.display_name}
            </a>{" "}
            Profile
          </h1>
          <hr />
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
        <div className="col-md-5 order-2 order-md-1">
          <div className="mt-3 d-block-sm d-md-none d-lg-none d-xl-none"></div>
          <div className="card">
            <div className="card-body">
              <img
                className="rounded-circle img-fluid profile_image mx-auto d-block"
                src={profileData.logo}
              />
              <hr />
              <div className="profileData">
                <div>
                  <strong>Name:</strong> {profileData.display_name}
                </div>
                <div>
                  <strong>Type:</strong>{" "}
                  {profileData.broadcaster_type
                    ? profileData.broadcaster_type.charAt(0).toUpperCase() +
                      profileData.broadcaster_type.slice(1)
                    : "User"}
                </div>
                <div>
                  <strong>Followers:</strong>: {profileData.followers}
                </div>
                <div>
                  <strong>Channel Views:</strong> {profileData.views}
                </div>
                <div>
                  <strong>Joined Twitch:</strong> {JoinedTwitch()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 order-md-2">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">
                {profileData.display_name}
                {profileData.partner && (
                  <img className="verified_badge" src="/images/verified.png" />
                )}
              </h2>
              <hr />
              <p>
                {!profileData.description
                  ? "This user has no bio"
                  : profileData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
