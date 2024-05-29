import Ongoing from "./Ongoing";

const taskInfo = [
  {
    time: "9:30",
    title: "Search Inspiration for project",
    link: "www.example.org",
    comments: "8 comments",
    completed: 60,
  },
  {
    time: "10:45",
    title: "Search Inspiration for project",
    link: "www.example.org",
    comments: "5 comments",
    completed: 60,
  },
  {
    time: "7:15",
    title: "Search Inspiration for project",
    link: "www.example.org",
    comments: "7 comments",
    completed: 60,
  },
];

const Task = () => {
  return (
    <div className="col-span-3 flex flex-col gap-4 bg-light-Secondary dark:bg-dark-Secondary">
      {taskInfo.map((task, index) => (
        <Ongoing key={index} info={task} />
      ))}
    </div>
  );
};

export default Task;
