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
    <div className="  bg-light-Primary dark:bg-dark-Primary flex h-12 min-w-[1000px] flex-auto items-center justify-center">
      <div>
        <input
          type="search"
          placeholder="search.."
          className="bg-gray-200 dark:bg-black"
        />
      </div>
      <div className="bg-yellow-">
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
