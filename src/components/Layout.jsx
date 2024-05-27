import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="max-container flex h-full w-full bg-light-Primary dark:bg-dark-Primary">
      <SideNav />
      <div className="h-full w-full flex-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
