import { NavLink } from "react-router-dom";

import styles from "./CharacterCard.css";

const CharacterCard = ({ image, name, status, id }) => {
  return (
    <NavLink to={`/characters/${id}`}>
      <img src={image} alt="" />
      <div className="childrens">
        {name}
        {(() => {
          switch (status) {
            case "Dead":
              return <div className={`red`}>{status}</div>;
            case "Alive":
              return <div className={`green`}>{status}</div>;
            case "unknown":
              return <div className={`gray`}>{status}</div>;
          }
        })()}
      </div>
    </NavLink>
  );
};

export default CharacterCard;
