import React, { useState, useCallback, useEffect } from "react";
import _ from 'lodash';
import Form from "../ui/Form";
import SearchResults from "./SearchResults";
import AlertMsg from "../ui/AlertMsg";

const Search = () => {
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const self = this;

  const PreventRefresh = event => {
    event.preventDefault();
  };

  const InputData = value => {
    const inputUser = value.replace(/\s/g, "");
    setUser(inputUser);
  };

  const Alert = m => {
    if (m !== "") {
      setAlert(true);
      setAlertMessage(m);
    } else {
      setAlert(false);
    }
  };

  const debounceOnChange = useCallback(_.debounce(InputData, 250), []);

  return (
    <>
      {alert ? <AlertMsg alertText={alertMessage} /> : null}
      <Form InputData={debounceOnChange} PreventRefresh={PreventRefresh} />
      <SearchResults user={user} Alert={Alert} />
    </>
  );
};

export default Search;
