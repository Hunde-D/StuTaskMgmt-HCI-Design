import { CiStar } from "react-icons/ci";
import TaskChart from "./TaskChart";

const TaskSummary = () => {
  return (
    <div className="flex w-full flex-col divide-y-[1px] rounded-lg bg-light-Primary p-3">
      <div className="my-5 flex justify-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-center">
          <CiStar />
        </div>
        <p>new task</p>
        <p className=" ml-auto">10</p>
      </div>
      <div className="flex  w-full items-center justify-between text-right">
        <div className="w-1/2">
          <TaskChart />
        </div>
        <p className="mt-10 self-start">
          10+ more <br /> <span>from last week</span>
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;
