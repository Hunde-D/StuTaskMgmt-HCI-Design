import { CiStar } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { FaRegFileLines } from "react-icons/fa6";
import TaskChart from "./TaskChart";

const TaskSummary = ({ dt }) => {
  const SummaryData = [
    {
      title: "Task Completed",
      no: "08",
      chartColor: "#5051F9",
      icon: <CiStar className="text-[#5c626b] dark:text-light-text" />,
    },
    {
      title: "New Task ",
      no: "10",
      chartColor: "#1EA7FF",
      icon: <FaRegFileLines className="text-[#5c626b] dark:text-light-text" />,
    },
    {
      title: "Projects Done",
      no: "12",
      chartColor: "#FF614C",
      icon: <BiTask className="text-[#5c626b] dark:text-light-text" />,
    },
  ];
  return (
    <div className="  flex h-48 w-full flex-col divide-y-[1px] rounded-lg bg-light-Primary  p-3 dark:bg-dark-Primary dark:text-light-text">
      <div className="my-3 flex justify-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-center dark:bg-[#282932]">
          {SummaryData[dt].icon}
        </div>
        <p>{SummaryData[dt].title}</p>
        <p className=" ml-auto">{SummaryData[dt].no}</p>
      </div>
      <div className="flex  w-full items-center justify-between text-right">
        <div className="w-1/2">
          <TaskChart lineColor={SummaryData[dt].chartColor} />
        </div>
        <p className="mt-10 self-start">
          <span className="text-[#299702] dark:text-light-Primary">
            {SummaryData[dt].no}+
          </span>{" "}
          more <br /> <span>from last week</span>
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
