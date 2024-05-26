import { NavLink } from "react-router-dom";

const SideNav = ({ className }) => {
  return (
    <div className="bg- bg-light-white dark:bg-dark-Primary flex h-full w-16 grow-0 flex-col items-center justify-center gap-3 ">
      <NavLink to="/">H</NavLink>
      <NavLink to="tasks">T</NavLink>
      <NavLink>S</NavLink>
      <NavLink>F</NavLink>
    </div>
  );
};

export default SideNav;
