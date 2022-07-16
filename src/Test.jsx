import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "@mui/material";

const Test = () => {
  const [episode, setEpisode] = useState([]);
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, data } = fetchedData;
  const baseUrl = `https://rickandmortyapi.com/api/episode/2,3,5`;

  useEffect(() => {
    axios.get(baseUrl).then(({ data }) => {
      console.log(data);
      setEpisode(data.results);
      updateFetchedData(data);
    });
  }, [baseUrl]);

  return (
    <div>
      {" "}
      {episode.map((episode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
};

export default Test;
