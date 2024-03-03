"use client";
import { ANIME, IAnimeResult } from "@consumet/extensions";
import React, { useState } from "react";
import Card from "./Card";

const Anime = () => {
  const [result, setResult] = useState<any>([])
  // Create a new instance of the Gogoanime provider
  const gogoanime = new ANIME.Gogoanime();
  // Search for an anime. In this case, "One Piece"
  const results = gogoanime.search("One Piece").then((data) => {
    // print results
    // console.log(data);
    setResult(data?.results);
    console.log(data?.results);
  });
  return <div>
    {result?.map((item:any) => {
      return <Card data={item} />
    })}
  </div>;
};

export default Anime;
