import { CiStar } from "react-icons/ci";
import TaskChart from "./TaskChart";

const TaskSummary = ({ dt }) => {
  const SummaryData = [
    { title: "Task Completed", no: "08", chartColor: "#5051F9" },
    { title: "New Task ", no: "10", chartColor: "#1EA7FF" },
    { title: "Projects Done", no: "12", chartColor: "#FF614C" },
    { title: "Projects Done", no: "12", chartColor: "#5051F9" },
  ];
  return (
    <div className="  dark:text-light-text flex h-48 w-full flex-col divide-y-[1px] rounded-lg  bg-light-Primary p-3 dark:bg-dark-Primary">
      <div className="my-3 flex justify-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-center dark:bg-[#282932]">
          <CiStar className="dark:text-light-text" />
        </div>
        <p>{SummaryData[dt].title}</p>
        <p className=" ml-auto">{SummaryData[dt].no}</p>
      </div>
      <div className="flex  w-full items-center justify-between text-right">
        <div className="w-1/2">
          <TaskChart lineColor={SummaryData[dt].chartColor} />
        </div>
        <p className="mt-10 self-start">
          {SummaryData[dt].no}+ more <br /> <span>from last week</span>
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
