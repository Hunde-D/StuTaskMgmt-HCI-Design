import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { avtBlue, avtRed } from "../assets/avatar";
const Header = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  flex h-12 w-full flex-auto items-center justify-end border-b-[0.25px] border-[#e8e9ea]  bg-light-Primary px-5 dark:border-[#424141] dark:bg-dark-Primary">
      <div className=" mr-[430px] flex h-4/6 rounded-md bg-gray-200 px-4 dark:bg-black">
        <input
          type="search"
          placeholder="Search Anything.."
          className=" bg-transparent"
        />
      </div>
      <div className=" flex gap-2">
        <IoMdNotificationsOutline
          className="dark:text-light-Primary"
          size={20}
        />
        <img
          class="h-5 w-5 rounded-full "
          src={avtBlue}
          alt="Rounded avatar"
        ></img>
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny className="text-white" />}
          {!dark && <IoMoon className="text-black" />}
        </button>
        <IoIosArrowDown size={20} className="dark:text-light-Primary" />
      </div>
    </div>
  );
};

export default Header;
