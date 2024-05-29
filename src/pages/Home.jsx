import DashBoard from "../components/DashBoard";
import QuickAccess from "../components/QuickAccess";

const Home = () => {
  return (
    <div className="flex h-[700px] w-full flex-auto bg-light-Secondary dark:bg-dark-Secondary">
      <DashBoard />
      <QuickAccess />
    </div>
  );
};

export default Home;
