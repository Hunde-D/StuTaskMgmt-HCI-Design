import TaskDone from "./TaskDone";
import TaskSummary from "./TaskSummary";

const DashBoard = () => {
  const SummaryData = [
    { title: "Task Completed", no: "08", chartColor: "purple" },
    { title: "New Task ", no: "10", chartColor: "blue" },
    { title: "Projects Done", no: "12", chartColor: "orange" },
    // { title: "Projects Done", no: "12", chartColor: "orange" },
  ];

  return (
    <div className="grid h-full w-[60%] flex-auto grid-cols-3 gap-5 bg-light-Secondary p-5 dark:bg-dark-Secondary">
      {SummaryData.map((dt, index) => (
        <TaskSummary key={index} dt={index} />
      ))}
      <TaskDone />
      <TaskSummary dt={3} />
    </div>
  );
};

export default DashBoard;
