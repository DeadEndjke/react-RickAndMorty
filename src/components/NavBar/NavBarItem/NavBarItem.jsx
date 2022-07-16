import { NavLink } from "react-router-dom";
import t from "./NavBarItem.module.css";
const NavBarItem = (props) => {
  return (
    <NavLink to={props.path}>
      <div className={t.NavBarItem}>{props.name}</div>
    </NavLink>
  );
};

export default NavBarItem;
