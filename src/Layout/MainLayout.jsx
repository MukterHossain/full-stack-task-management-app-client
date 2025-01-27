import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto pt-20 min-h-[calc(100vh-220px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
