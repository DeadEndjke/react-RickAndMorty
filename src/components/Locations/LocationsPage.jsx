import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LocationsPage = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, type, dimension } = fetchedData;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

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
          <span>Name : </span>
          {name}
        </div>
        <div>
          <span>Type: </span>
          {type}
        </div>
        <div>
          <span>Dimension: </span>
          {dimension}
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
