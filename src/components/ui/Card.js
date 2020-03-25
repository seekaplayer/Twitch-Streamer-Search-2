import React from "react";

const Card = ({ display_name, video_banner }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className="card">
        <img
          src={
            video_banner !== null
              ? video_banner
              : "https://static-cdn.jtvnw.net/jtv_user_pictures/de4062f1-66b3-49a1-a8b1-6f2105d0e64a-channel_offline_image-1920x1080.png"
          }
          className="card-img-top"
          alt={display_name}
        />
        <div className="card-body">{display_name}</div>
      </div>
    </div>
  );
};

export default Card;
