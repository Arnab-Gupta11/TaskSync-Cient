import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>Main</h2>
      <Outlet />
    </div>
  );
};

export default MainLayout;
