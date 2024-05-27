import { Link } from "react-router-dom";
import icon1 from "../assets/icons/icon1.svg";

import { GrAppsRounded } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import { HiOutlineFolderPlus } from "react-icons/hi2";

const SideNav = () => {
  return (
    <div className="bg- flex h-full w-16 grow-0 flex-col items-center justify-center gap-10 bg-light-white dark:bg-dark-Primary ">
      <Link to="/" className={"active p-2 hover:text-[#5051F9]"}>
        <GrAppsRounded
          size={24}
          className=" text-purple-950 hover:text-[#5051F9]"
        />
      </Link>
      <Link to="/timeline">
        <img src={icon1} />
      </Link>
      <Link to="/tasks">
        <GoBook size={24} className=" text-purple-950 hover:text-[#5051F9]" />
      </Link>
      <Link to="/setting">
        <IoIosSettings
          size={24}
          className=" text-purple-950 hover:text-[#5051F9]"
        />
      </Link>
      <Link to="/chat">
        <VscSend size={24} className=" text-purple-950 hover:text-[#5051F9]" />
      </Link>
      <Link to="/page">
        <HiOutlineFolderPlus
          size={24}
          className=" text-purple-950 hover:text-[#5051F9]"
        />
      </Link>
    </div>
  );
};

export default SideNav;
