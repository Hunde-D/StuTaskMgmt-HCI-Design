import { FaPlay } from "react-icons/fa";

const Task = () => {
  return (
    <div className="col-span-3 flex flex-col gap-4 bg-light-Secondary dark:bg-dark-Secondary">
      <div className="flex w-full gap-3 bg-light-Primary dark:bg-dark-Primary">
        <div className="flex-auto bg-[#FBFAFF] p-3 dark:bg-[#212229]">
          <div className=" bg-btn-primary flex h-8 w-8 items-center  justify-center rounded-full">
            <FaPlay className="text-white" size={15} />
          </div>
          <div>
            <p>Start here</p>
            <p>9:30</p>
          </div>
        </div>
        <div className=" flex-auto p-3">
          <p>Search Inspiration for project</p>
          <div>
            <p>icon</p>
            <p>chat 8 comments</p>
          </div>
        </div>
        <div className=" flex-auto p-3">
          <p>24%</p>
          <p>progress</p>
        </div>
        <div className=" flex-auto p-3"> icon remainder</div>
      </div>
      <div className="flex w-full gap-3 bg-light-Primary dark:bg-dark-Primary">
        <div className="flex-auto bg-[#FBFAFF] p-3 dark:bg-[#212229]">
          <div className=" bg-btn-primary flex h-8 w-8 items-center  justify-center rounded-full">
            <FaPlay className="text-white" size={15} />
          </div>
          <div>
            <p>Start here</p>
            <p>9:30</p>
          </div>
        </div>
        <div className=" flex-auto p-3">
          <p>Search Inspiration for project</p>
          <div>
            <p>icon</p>
            <p>chat 8 comments</p>
          </div>
        </div>
        <div className=" flex-auto p-3">
          <p>24%</p>
          <p>progress</p>
        </div>
        <div className=" flex-auto p-3"> icon remainder</div>
      </div>
    </div>
  );
};

export default Task;
