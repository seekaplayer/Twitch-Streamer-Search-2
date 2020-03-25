import React, { useState } from "react";
import Form from "../ui/Form";
import SearchResults from "./SearchResults";
import AlertMsg from "../ui/AlertMsg";

const Search = () => {
  const [user, setUser] = useState("");
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const PreventRefresh = event => {
    event.preventDefault();
  };
  const InputData = event => {
    event.preventDefault();
    const inputUser = event.target.value.replace(/\s/g, "");
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

  return (
    <>
      {alert ? <AlertMsg alertText={alertMessage} /> : null}
      <Form InputData={InputData} PreventRefresh={PreventRefresh} />
      <SearchResults user={user} Alert={Alert} />
    </>
  );
};

export default Search;
