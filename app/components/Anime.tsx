import { ANIME } from "@consumet/extensions";
import React from "react";

const Anime = () => {
  // Create a new instance of the Gogoanime provider
  const gogoanime = new ANIME.Gogoanime();
  // Search for an anime. In this case, "One Piece"
  const results = gogoanime.search("One Piece").then((data) => {
    // print results
    console.log(data);
  });
  return <div className="w-full h-screen">Anime</div>;
};

export default Anime;
