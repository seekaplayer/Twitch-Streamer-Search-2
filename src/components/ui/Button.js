import React from "react";

const Button = ({ buttonType, buttonID, buttonClass, buttonText }) => {
  return (
    <button type={buttonType} id={buttonID} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default Button;
