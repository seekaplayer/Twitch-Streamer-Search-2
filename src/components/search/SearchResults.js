import React, { useState, useEffect } from "react";
import {
  TwitchUserSearch,
  TwitchLiveStream
} from "../../libs/Twitch/TwitchAPI";
import Card from "../ui/Card";

const SearchResults = ({ user, Alert }) => {
  const [results, setResults] = useState("");
  const [user_id, setUser_id] = useState(null);
  const TwitchData = async () => {
    if (user) {
      const userData = await TwitchUserSearch(user);
      //const userID = await TwitchLiveStream(userData.channels._id);
      if (userData) {
        setResults(userData);
        Alert("");
        if (userData.channels.length === 0) {
          Alert("Sorry, that user doesn't exist. Please try again!");
        }
      }
    } else {
      setResults("");
      Alert("");
    }
  };
  useEffect(() => {
    TwitchData();
  }, [user]);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {results
            ? results.channels.map(result => (
                <Card
                  display_name={result.display_name}
                  video_banner={result.video_banner}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
