import React, { useState, useEffect } from "react";

const Card = ({ i, display_name, video_banner, isLive }) => {
  return (
    <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div className="card">
        <img
          src={video_banner ? video_banner : "/images/twichdefaultbg.jpg"}
          className="card-img-top"
          alt={display_name}
        />
        <div className="card-body">
          {display_name} {isLive && "| Live"}
        </div>
      </div>
    </div>
  );
};

export default Card;
