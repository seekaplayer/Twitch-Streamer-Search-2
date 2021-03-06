import React, { useState, useEffect } from "react";

const Card = ({
  i,
  display_name,
  video_banner,
  isLive,
  ChangeToProfile,
  FullUserDetails
}) => {
  return (
    <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className="card">
        <img
          src={
            isLive
              ? isLive.preview.medium
              : video_banner
              ? video_banner
              : "/images/twichdefaultbg.jpg"
          }
          className="card-img-top"
          alt={display_name}
        />
        <div className="card-body">
          {display_name}{" "}
          {isLive ? (
            <>
              <span className="badge badge-twitch">LIVE</span>
              <div className="float-right">
                <span>
                  Viewers:{" "}
                  <span className="twitchColor font-weight-bold">
                    {isLive.viewers}
                  </span>
                </span>
              </div>
            </>
          ) : (
            <span className="badge badge-danger">OFFLINE</span>
          )}
          <hr />
          <div className="text-center">
            <button
              onClick={() => ChangeToProfile(FullUserDetails, isLive)}
              className="badge badge-dark"
            >
              View Profile
            </button>{" "}
            <a href={FullUserDetails.url} target="_blank">
              <span className="badge badge-dark">View on Twitch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
