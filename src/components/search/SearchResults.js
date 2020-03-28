import React, { useState, useEffect } from "react";
import {
  TwitchUserSearch,
  TwitchLiveStream
} from "../../libs/Twitch/TwitchAPI";
import Card from "../ui/Card";

const SearchResults = async ({ user, Alert }) => {
  const [results, setResults] = useState("");

  const TwitchData = async () => {
    if (user) {
      const userData = await TwitchUserSearch(user);
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

  const TwitchLiveStreamData = async userID => {
    const streamData = await TwitchLiveStream(userID);
    return streamData.stream;
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {results
            ? results.channels.map((result, i) => {
                TwitchLiveStreamData(result._id);
                return (
                  <Card
                    key={i}
                    display_name={result.display_name}
                    video_banner={result.video_banner}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
