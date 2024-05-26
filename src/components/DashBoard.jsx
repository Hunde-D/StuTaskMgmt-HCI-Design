import TaskDone from "./TaskDone";
import TaskSummary from "./TaskSummary";

const DashBoard = () => {
  return (
    <div className="grid h-full w-[60%] flex-auto grid-cols-3 gap-5 bg-light-Secondary p-5 dark:bg-dark-Secondary">
      <TaskSummary />
      <TaskSummary />
      <TaskSummary />
      <TaskDone />
    </div>
  );
};

export default DashBoard;
