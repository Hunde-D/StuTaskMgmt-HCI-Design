import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";
const Header = ({ className }) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="  flex h-12 w-full flex-auto items-center justify-end bg-light-Primary dark:bg-dark-Primary">
      <div className=" flex h-4/6 rounded-md bg-gray-200 mr-52 px-4 dark:bg-black">
        <input
          type="search"
          placeholder="Search Anything.."
          className=" bg-transparent"
        />
      </div>
      <div className="">
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny className="text-white"/>}
          {!dark && <IoMoon className="text-black"/>}
        </button>
      </div>
    </div>
  );
};

export default Header;
