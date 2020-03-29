import React, { useState, useEffect } from "react";
import {
  TwitchUserSearch,
  TwitchLiveStream
} from "../../libs/Twitch/TwitchAPI";
import Card from "../ui/Card";
import Loader from "../ui/Loader";
import Profile from "../profile/Profile";

const SearchResults = ({ user, Alert, RemoveForm }) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [profile, setProfile] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [profileVideo, setProfileVideo] = useState();

  const TwitchData = async () => {
    if (user) {
      setLoading(true);
      const userData = await TwitchUserSearch(user);
      setProfileData(userData.channels);
      if (userData) {
        Alert("");

        if (userData.channels.length === 0) {
          Alert("Sorry, that user doesn't exist. Please try again!");
          setCards([]);
        }

        if (userData.channels.length) await getCards(userData.channels);
      }
      setLoading(false);
    } else {
      setCards([]);
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

  const getCards = async channels => {
    if (!channels.length) return setCards([]);

    let cards = [];

    for (let i = 0; i < channels.length; i++) {
      const result = channels[i];

      const streamData = await TwitchLiveStreamData(result._id);

      cards.push(
        <Card
          key={i}
          ChangeToProfile={ChangeToProfile}
          isLive={streamData}
          display_name={result.display_name}
          video_banner={result.video_banner}
          FullUserDetails={result}
        />
      );
    }
    setCards(cards);
  };

  const ChangeToProfile = (FullUserDetails, isLive) => {
    setProfile(true);
    RemoveForm();
    setCards([]);
    setProfileData(FullUserDetails);
    setProfileVideo(isLive);
  };

  return (
    <>
      <div className="container mt-3">
        {!profile ? (
          <div className="row">
            {loading ? (
              <Loader loaderText={"Search For Streamer...Please Wait!"} />
            ) : (
              cards
            )}
          </div>
        ) : (
          <Profile
            profileData={profileData}
            profileVideo={profileVideo}
            isLive={profileVideo}
          />
        )}
      </div>
    </>
  );
};

export default SearchResults;
