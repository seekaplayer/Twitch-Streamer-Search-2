import React from "react";

const AlertMsg = ({ alertText }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="alert twitch-alert">{alertText}</div>
        </div>
      </div>
    </div>
  );
};
export default AlertMsg;
