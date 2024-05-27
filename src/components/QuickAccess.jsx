import { CiCalendarDate } from "react-icons/ci";
import { GrAppsRounded } from "react-icons/gr";
// import { PiDotsThreeVertical, PiPhoneCallThin } from "react-icons/pi";
import img from "../assets/images/emoji.png";

import {
  avtGray,
  avtBlue,
  avtPurple,
  avtYellow,
  avtRed,
} from "../assets/avatar";
const QuickAccess = () => {
  return (
    <div className=" flex h-full w-1/4 flex-auto flex-col divide-y-[1px]  border-slate-100 bg-light-Primary px-6 py-4 font-DMSans dark:bg-dark-Primary">
      <div className="">
        <div className="mb-3 flex justify-between">
          <p className="text-[#232360]">Todays Schedule</p>
          <div className="flex gap-3 rounded-xl bg-light-Secondary p-1 px-1.5">
            <GrAppsRounded />
            <CiCalendarDate />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-[#1EA7FF]">
          <p>
            30 minute call with Client <span className="ml-20">+invite</span>
          </p>
          <p className="text-[#232360]">Project Discovery Call</p>
          <div className=" bg-btn-primary mb-5 flex w-4/5 self-center  rounded-lg px-2 py-4 text-light-Primary">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img
                className="h-9 w-9 rounded-full border-2 border-white dark:border-gray-800"
                src={avtRed}
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full border-2 border-white dark:border-gray-800"
                src={avtBlue}
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full border-2 border-white dark:border-gray-800"
                src={avtYellow}
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full border-2 border-white dark:border-gray-800"
                src={avtPurple}
                alt=""
              />
            </div>
            <p>28:35</p>
            <div>
              {/* <PiPhoneCallThin /> */}
              {/* <PiDotsThreeVertical class="text-white" /> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="m-3">Messges</p>

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

        {/* {} */}
        <div>
          <p className="my-2 font-bold text-[#232360]">New Task</p>
          <p className="text-sm font-thin text-[#768396]">Task Title</p>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="block w-full rounded-2xl border-gray-200 bg-light-Secondary px-5 py-3 text-sm focus:border-blue-500 focus:ring-blue-500  dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Create New"
            />
          </div>
          {/* <div className="text-lg"> 😎👌🔥😎🎉🥳✨🏆😍🍾🚀😎</div> */}
          <img className="  w-full rounded-full" src={img} />
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
