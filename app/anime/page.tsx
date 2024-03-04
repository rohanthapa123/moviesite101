"use client";
import { ANIME, IAnimeResult, ISearch } from "@consumet/extensions";
import React, { useEffect, useState } from "react";

import { error } from "console";
import Card from "../components/Card";

const Anime = () => {
  const [results, setResults] = useState<IAnimeResult[]>([]);
const [loading, setLoading] = useState<boolean>(true);
  function getAnime() {

      const gogoanime = new ANIME.Gogoanime();

      // Search for an anime. In this case, "One Piece"
      gogoanime.search("One Piece").then((resp)=>{
        setResults(resp.results);
        console.log(resp.results);
        setLoading(false)
      }).catch((error)=>{
        console.log(error)
      });

      console.log(results)
  }

  useEffect(() => {
    getAnime();

  }, []);

  return (loading ? <h1>loading</h1> : <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {results?.map((item: any) => {
      return <Card key={item.id} data={item} />
    })}
  </div>)
};

export default Anime;
