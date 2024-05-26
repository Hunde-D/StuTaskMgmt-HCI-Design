import { CiCalendarDate } from "react-icons/ci";
import { GrAppsRounded } from "react-icons/gr";
// import { PiDotsThreeVertical } from "react-icons/pi";
// import { Input } from "@material-tailwind/react";
import img from "../assets/images/image.png";

import {
  avtGray,
  avtBlue,
  avtPurple,
  avtYellow,
  avtRed,
} from "../assets/avatar";
const QuickAccess = () => {
  return (
    <div className=" flex h-full flex-auto flex-col divide-y-2 border-[1px] bg-light-Primary  p-3 font-DMSans">
      <div className="">
        <div className="flex justify-between p-4">
          <p>Todays Schedule</p>
          <div className="flex gap-3 rounded-xl bg-light-Secondary p-1 px-1.5">
            <GrAppsRounded />
            <CiCalendarDate />
          </div>
        </div>

        <div className="flex flex-col">
          <p>
            30 minute call with Client <span>+invite</span>
          </p>
          <p>Project Discovery Call</p>
          <div className=" flex w-4/5 self-center rounded-lg bg-btn-primary  px-2 py-4 text-light-Primary">
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
        <p>Messges</p>

        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtRed} alt="" />
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Hello!
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtBlue} alt="" />
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Whats UP
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtPurple} alt="" />
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avtYellow} alt="" />
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              it looks good
            </div>
          </div>
        </div>

        {/* {} */}
        <div>
          <p>New Task</p>
          <p>Task Title</p>
          <div className="max-w-sm space-y-3">
            <input
              type="text"
              className="block w-full rounded-2xl border-gray-200 bg-light-Secondary px-5 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
