import { Search, Plus, Minus, Avatar } from "../../assets/icons";
import {
  avtGray,
  avtBlue,
  avtPurple,
  avtYellow,
  avtRed,
} from "../../assets/avatar";
import { useState } from "react";
const UserChatList = () => {
  const [addMore, setAddMore] = useState(false);

  return (
    <div className="no-scrollbar  flex flex-col gap-4 overflow-y-scroll scroll-smooth ">
      <h2 className="text-lg font-bold dark:text-[#F8F8F8]">Messages</h2>
      <div className="flex justify-between gap-5">
        <div className=" flex h-10 flex-1 items-center gap-2 rounded-md bg-[#F5F5F5] px-2 dark:bg-dark-Secondary">
          <Search className="text-[#b1b6bf]" size={20} />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="">
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtRed} alt="" />
          <div className="font-medium dark:text-white">
            <div>Yosef Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Hi Hunde! How are You?
            </div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtBlue} alt="" />
          <div className="font-medium dark:text-white">
            <div>Lealem </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Do you need that design?
            </div>
          </div>
        </div>
        <div className="my-3items-center flex gap-4">
          <img className="h-10 w-10 rounded-full" src={avtPurple} alt="" />
          <div className="font-medium dark:text-white">
            <div>Fira'ol</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              What is the price of hourly...
            </div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtYellow} alt="" />
          <div className="font-medium dark:text-white">
            <div>Anwar Ahmed</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Awsome design!!
            </div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtRed} alt="" />
          <div className="font-medium dark:text-white">
            <div>Yosef Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Hi Hunde! How are You?
            </div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtBlue} alt="" />
          <div className="font-medium dark:text-white">
            <div>Lealem </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Do you need that design?
            </div>
          </div>
        </div>
        <div className="my-3items-center flex gap-4">
          <img className="h-10 w-10 rounded-full" src={avtPurple} alt="" />
          <div className="font-medium dark:text-white">
            <div>Fira'ol</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              What is the price of hourly...
            </div>
          </div>
        </div>
        <div className="my-3 flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtYellow} alt="" />
          <div className="font-medium dark:text-white">
            <div>Anwar Ahmed</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Awsome design!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatList;
