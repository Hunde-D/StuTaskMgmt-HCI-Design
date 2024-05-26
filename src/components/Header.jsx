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
    <div className="  h-12 w-full flex-auto items-center justify-center bg-light-Primary dark:bg-dark-Primary">
      <div className=" flex h-full w-full justify-center bg-red-200">
        <div className=" mr-12 flex h-4/6 rounded-md bg-gray-200 px-4 dark:bg-black">
          <input
            type="search"
            placeholder="Search Anything.."
            className=" mr-8 bg-transparent text-sm"
          />
        </div>
        <div className="">
          <button onClick={() => darkModeHandler()}>
            {dark && <IoSunny />}
            {!dark && <IoMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
