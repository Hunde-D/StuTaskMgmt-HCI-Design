import { useEffect, useState } from "react";
import daily from "../assets/images/tab0.png";
import weekly from "../assets/images/tab1.png";
import monthly from "../assets/images/tab2.png";

const img = [daily, weekly, monthly];

const TaskDone = () => {
  const [currTab, setCurrTab] = useState(2);
  const [tabImg, setTabImg] = useState(img[currTab]);
  const tabs = [
    {
      label: "Daily",
      content: daily,
    },
    {
      label: "Weekly",
      content: weekly,
    },
    {
      label: "Monthly",
      content: monthly,
    },
  ];
  const handleTabs = (index) => {
    setCurrTab(index);
  };
  useEffect(() => {
    setTabImg(img[currTab]);
  }, [currTab]);
  return (
    <div className="col-span-2 bg-light-Primary">
      <div className="flex justify-between">
        <p>Task Done</p>
        <div className="flex gap-3 pr-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${index === currTab ? "active" : "border-gray-200 "} border-b-2  p-2 text-center text-sm font-semibold hover:border-sky-300 hover:text-sky-600`}
              onClick={() => handleTabs(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <img src={tabImg} className="ml-10 h-48 w-5/6" />
      <div></div>
    </div>
  );
};

export default TaskDone;
