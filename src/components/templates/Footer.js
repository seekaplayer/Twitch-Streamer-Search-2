import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            &copy; {new Date().getFullYear()} Twitch Streamer Search{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
