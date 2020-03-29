import React from "react";

const Loader = ({ loaderText }) => {
  return (
    <div className="col-12 text-center">
      <div className="d-flex justify-content-center">
        <div className="spinner-border twitchColor mt-3 mb-3" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <span className="mt-2">{loaderText}</span>
    </div>
  );
};
export default Loader;
