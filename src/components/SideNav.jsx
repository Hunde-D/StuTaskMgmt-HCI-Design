import { Link, useLocation, useParams } from "react-router-dom";
import icon1 from "../assets/icons/icon1.svg";
import { useState, useEffect } from "react";

import { GrAppsRounded } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { HiOutlineFolderPlus } from "react-icons/hi2";

const SideNav = () => {
  const [active, setActive] = useState(
    parseInt(localStorage.getItem("activeLink"), 10) || 0,
  );
  const handleClick = (id) => {
    setActive(id);
    localStorage.setItem("activeLink", id);
  };
  return (
    <div className="  flex h-full w-16 grow-0 flex-col items-center gap-10 bg-light-white dark:bg-dark-Primary ">
      <Link
        to="/"
        id="0"
        onClick={() => handleClick(0)}
        className={`${active === 0 ? "bg-btn-primary " : ""} mt-32 rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <GrAppsRounded
          size={24}
          className={` ${active === 0 ? "bg-btn-primary text-light-Primary hover:text-blue-400" : "text-[#5F6388] hover:text-white"}`}
        />
      </Link>
      <Link
        to="/timeline"
        id="1"
        onClick={() => handleClick(1)}
        className={`${active === 1 ? "bg-btn-primary " : ""} rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <img
          src={icon1}
          className={` ${active === 1 ? "bg-btn-primary text-light-Primary hover:text-blue-400 " : "text-[#5F6388] hover:text-white "}`}
        />
      </Link>
      <Link
        to="/tasks"
        id="2"
        onClick={() => handleClick(2)}
        className={`${active === 2 ? "bg-btn-primary " : ""} rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <IoBookOutline
          size={24}
          className={` ${active === 2 ? "bg-btn-primary text-light-Primary hover:text-blue-400" : "text-[#5F6388] hover:text-white "}`}
        />
      </Link>
      <Link
        to="/setting"
        id="3"
        onClick={() => handleClick(3)}
        className={`${active === 3 ? "bg-btn-primary " : ""} rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <IoIosSettings
          size={24}
          className={` ${active === 3 ? "bg-btn-primary text-light-Primary hover:text-blue-400" : "text-[#5F6388] hover:text-white "}`}
        />
      </Link>
      <Link
        to="/chat"
        id="4"
        onClick={() => handleClick(4)}
        className={`${active === 4 ? "bg-btn-primary " : ""} rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <VscSend
          size={24}
          className={` ${active === 4 ? "bg-btn-primary text-light-Primary hover:text-blue-400" : "text-[#5F6388] hover:text-white"} `}
        />
      </Link>
      <Link
        to="/storage"
        id="5"
        onClick={() => handleClick(5)}
        className={`${active === 5 ? "bg-btn-primary " : ""} rounded-lg
                p-1 hover:bg-btn-primary`}
      >
        <HiOutlineFolderPlus
          size={24}
          className={` ${active === 5 ? "bg-btn-primary text-light-Primary" : "text-[#5F6388] hover:text-white "}`}
        />
      </Link>
    </div>
  );
};

export default SideNav;
