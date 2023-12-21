// import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../components/Shared/Logo/Logo";
const DashboardSidebarNav = () => {
  const { user, logoutUser } = useAuth();
  return (
    <div>
      <div className="bg-[#0A3D53] shadow-sm  shadow-[#70aeff] w-full flex justify-between items-center gap-7  py-4 md:pr-10 z-50">
        <div className="ml-7">
          <Link to={"/"}>
            <span className="text-2xl text-[#1B2850]">
              {/* <IoHome /> */}
              <Logo />
            </span>
          </Link>
        </div>
        {user ? (
          <details className="dropdown">
            <summary className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-[#2F75D0]">
                <img src={user?.photoURL} />
              </div>
            </summary>

            <ul
              tabIndex={0}
              className="mt-4 p-2 shadow menu dropdown-content z-[1] bg-[#0A3D53] rounded-md w-[280px] text-white border border-[#2F75D0] -left-[180px]"
            >
              <li>
                <a className="text-base  font-medium mb-0 ">{user?.displayName}</a>
              </li>
              <li>
                <a className="text-base  font-medium  mt-0">{user?.email}</a>
              </li>
              <li>
                <Link to={"/"}>
                  <button onClick={logoutUser} className="text-[#2F75D0] text-lg font-medium">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </details>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DashboardSidebarNav;
