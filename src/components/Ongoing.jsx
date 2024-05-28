import { FaPlay } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { GoStopwatch } from "react-icons/go";
import { useState } from "react";
const Ongoing = ({ info }) => {
  const [completed, setCompleted] = useState(info.completed || 24);
  return (
    <div className="flex w-full gap-3 bg-light-Primary px-2  dark:bg-dark-Primary dark:text-light-Primary ">
      <div className="flex flex-auto items-center gap-3 bg-[#FBFAFF] p-3 dark:bg-[#212229]">
        <div className=" flex h-8 w-8 items-center justify-center  rounded-full bg-btn-primary">
          <FaPlay className="text-white" size={15} />
        </div>
        <div>
          <p>Start from</p>
          <p className="flex items-center justify-start gap-1 text-[13px] text-[#778399] dark:text-[#C6C6C6]">
            <span>
              <CiClock2 />
            </span>
            {info.time}
          </p>
        </div>
      </div>
      <div className=" flex-auto py-3">
        <p>{info.title}</p>
        <div className=" flex gap-2 divide-x-[1px]">
          <p className="flex items-center gap-1 text-[13px] text-[#778399] dark:text-[#C6C6C6]">
            <IoIosLink /> <p className="text-btn-primary">{info.link}</p>
          </p>
          <div className="flex items-center gap-2 px-2 text-[13px] text-[#778399] dark:text-[#C6C6C6]">
            <BsChatDots /> <p>{info.comments}</p>
          </div>
        </div>
      </div>
      <div className=" flex w-1/5 flex-auto flex-col gap-2  py-3">
        <p>{info.completed}% Completed</p>

        <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`h-1.5  w-[${completed}%] rounded-full bg-btn-primary`}
          ></div>
        </div>
      </div>
      <div className=" flex flex-auto items-center justify-center py-3 ">
        <div className="flex h-10 w-fit items-center gap-1 rounded-xl bg-[#EDECFE] px-2 text-btn-primary dark:bg-[#282932] dark:text-[#E9E9E9]">
          <GoStopwatch className="dark:bg-dar text-btn-primary dark:text-[#E9E9E9] " />{" "}
          Remainder
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
