import React from "react";

const Input = ({
  inputName,
  inputID,
  inputClass,
  inputValue,
  inputPlaceholder,
  inputOnChange
}) => {
  return (
    <input
      name={inputName}
      id={inputID}
      className={inputClass}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={inputOnChange}
      autoComplete="off"
    />
  );
};
export default Input;
