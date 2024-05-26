import { useState } from "react";
import Tabs from "./Tabs";

const TaskDone = () => {
  const [currTab, setCurrTab] = useState(0);
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
  ];
  const handleTabs = (index) => {
    setCurrTab(index);
  };
  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${index === currTab ? "active" : "border-gray-200 "} border-b-2 p-4 hover:border-sky-300 hover:text-sky-600`}
            onClick={() => handleTabs(index)}
          >
            {" "}
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabs[currTab].content}</div>
    </div>
  );
};

export default TaskDone;
