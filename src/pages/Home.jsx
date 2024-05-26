import DashBoard from "../components/DashBoard";
import QuickAccess from "../components/QuickAccess";

const Home = () => {
  return (
    <div className="flex w-full flex-auto">
      <DashBoard />
      <QuickAccess />
    </div>
  );
};

export default Home;
