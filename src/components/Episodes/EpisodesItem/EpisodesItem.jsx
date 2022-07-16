import React from "react";
import { NavLink } from "react-router-dom";

const EpisodesItem = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, air_date } = x;

      return (
        <NavLink to={`/episodes/${id}`}>
          <div>
            {id}
            {name}
            {air_date}
          </div>
        </NavLink>
      );
    });
  } else {
    display = "No data Found :/";
  }

  return <>{display}</>;
};

export default EpisodesItem;
