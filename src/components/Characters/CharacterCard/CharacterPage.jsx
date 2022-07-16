import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, episode } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <h1>{name}</h1>

      <img src={image} alt="" />

      <div>
        <div>
          <span>Gender : </span>
          {gender}
        </div>
        <div>
          <span>Location: </span>
          {location?.name}
        </div>
        <div>
          <span>Origin: </span>
          {origin?.name}
        </div>
        <div>
          <span>Species: </span>
          {species}
        </div>
        <div>
          <span>Status: </span>
          {status}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
