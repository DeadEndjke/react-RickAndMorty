import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EpisodesPage = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, air_date, episode } = fetchedData;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <div>
          <span>Date : </span>
          {air_date}
        </div>
        <div>
          <span>Episode: </span>
          {episode}
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;
