import { NavLink } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import Logo from "../../../components/Shared/Logo/Logo";
// import DashboardNav from "../DashboardNav/DashboardNav";
import DashboardSidebarNav from "../DashboardSidebarNav/DashboardSidebarNav";

const DashboardSidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay z-10"></label>

      <ul className="menu p-4 w-72 min-h-full bg-[#0A3D53] text-base-content">
        {/* Sidebar content here */}
        <div className="hidden lg:block">
          <DashboardSidebarNav />
        </div>
        <div className="my-4 ml-4 lg:hidden">
          <Logo />
        </div>
        <div className="mt-4 space-y-3">
          <>
            <div>
              <NavLink
                to="/dashboard/my-task"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#70aeff] pl-5 pt-2  rounded-md  font-medium flex items-center gap-2"
                    : "text-white pl-5 pt-2   rounded-md  font-medium flex items-center gap-2"
                }
              >
                <span>
                  <BsListTask size={16} />
                </span>
                My Tasks
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/dashboard/sales-collection"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#70aeff] pt-2 pl-5  rounded-md  font-medium flex items-center gap-2"
                    : "text-white pt-2   pl-5 rounded-md  font-medium flex items-center gap-2"
                }
              >
                <span>
                  <FaTasks />
                </span>
                Manage Tasks
              </NavLink>
            </div>
          </>
        </div>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
