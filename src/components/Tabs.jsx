import { useState } from "react";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div>
      {tabsContent.map((tabItem, index) => (
        <div
          className={`${currentTabIndex === index ? "active" : ""} cursor-pointer`}
          onClick={() => handleOnClick(index)}
          key={tabItem.label}
        >
          <span className="label">{tabItem.label}</span>
        </div>
      ))}
      <div>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
