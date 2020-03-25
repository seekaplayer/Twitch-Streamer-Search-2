import { clientID, url } from "./TwitchAuth";

export const TwitchUserSearch = async user => {
  const param1 = "search";
  const param2 = "channels";
  const param3 = "query";
  const res = await fetch(`${url}/${param1}/${param2}?${param3}=${user}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": clientID
    }
  });
  const data = await res.json();
  return data;
};

export const TwitchLiveStream = async user_id => {
  const param1 = "streams";
  const param2 = user_id;
  const res = await fetch(`${url}/${param1}/${param2}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": clientID
    }
  });
  const data = await res.json();
  return data;
};
