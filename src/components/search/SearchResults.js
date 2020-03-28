import React, { useState, useEffect } from "react";
import {
  TwitchUserSearch,
  TwitchLiveStream
} from "../../libs/Twitch/TwitchAPI";
import Card from "../ui/Card";
import Loader from "../ui/Loader";

const SearchResults = ({ user, Alert }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const TwitchData = async () => {
    if (user) {
      setLoading(true);
      const userData = await TwitchUserSearch(user);

      if (userData) {

        Alert("");

        if (userData.channels.length === 0) {
          Alert("Sorry, that user doesn't exist. Please try again!");
        }

        if (userData.channels.length) await getCards(userData.channels);
      }
      setLoading(false);
    } else {
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

  const getCards = async (channels) => {
    if (!channels.length) return setCards([]);

    let cards = [];

    for (let i = 0; i < channels.length; i++) {
      const result = channels[i];

      const streamData = await TwitchLiveStreamData(result._id);

      cards.push((
        <Card
          key={i}
          isLive={streamData}
          display_name={result.display_name}
          video_banner={result.video_banner}
        />
      ))
    }

    setCards(cards);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {loading ? <Loader /> : cards}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
