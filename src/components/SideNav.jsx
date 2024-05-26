import { NavLink } from "react-router-dom";
import { GrAppsRounded } from "react-icons/gr";
import icon0 from "../assets/icons/icon0.svg";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.svg";
import icon4 from "../assets/icons/icon4.svg";

const SideNav = () => {
  return (
    <div className="bg- flex h-full w-16 grow-0 flex-col items-center justify-center gap-3 bg-light-white dark:bg-dark-Primary ">
      <NavLink to="/">
        <img src={icon0} />
      </NavLink>
      <NavLink to="/timeline">
        <img src={icon1} />
      </NavLink>
      <NavLink to="/tasks">
        <img src={icon2} />
      </NavLink>
      <NavLink to="/chat">
        <img src={icon3} />
      </NavLink>
      <NavLink to="/page">
        <img src={icon4} />
      </NavLink>
    </div>
  );
};

export default SideNav;
