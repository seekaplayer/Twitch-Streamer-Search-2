import React from "react";
import Input from "./Input";

const Form = ({ InputData, PreventRefresh }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={PreventRefresh}>
            <Input
              inputOnChange={e => InputData(e.target.value)}
              inputClass="form-control searchInput"
              inputPlaceholder="Search Twitch Streamers"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
