import t from "./NavBar.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";
const NavBar = () => {
  return (
    <div>
      <div className={t.NavBar}>
        <NavBarItem path="/episodes" name="Эпизоды" />
        <NavBarItem path="/characters" name="Персонажи" />
        <NavBarItem path="/locations" name="Локации" />
      </div>
    </div>
  );
};

export default NavBar;
