import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            &copy; {new Date().getFullYear()} Streamer Search, All Rights
            Reserved.
            <div className="createdBy">
              Made with <i className="fas fa-heart twitchColor"></i> by{" "}
              <a href="https://seekaplayer.com" target="_blank">
                Seekaplayer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
