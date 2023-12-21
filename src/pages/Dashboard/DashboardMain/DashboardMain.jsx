import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div>
      <Helmet>
        <title>Inventohub | Dashboard</title>
      </Helmet>
      <div className="bg-[#E3DEFC] min-h-screen ">
        <div className="max-w-[1110px] mx-auto py-10 px-5 lg:px-0">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
