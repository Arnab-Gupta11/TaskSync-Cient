import { IoHome } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiVideoFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const DashboardNav = () => {
  const { user, logoutUser } = useAuth();
  return (
    <div className="bg-[#0A3D53] shadow-sm  shadow-[#70aeff] w-full flex justify-evenly md:justify-end items-center  md:gap-6 py-4 md:pr-10 z-50">
      <Link to={"/"}>
        <span className="text-2xl text-[#1B2850]">
          <IoHome />
        </span>
      </Link>
      {user ? (
        <div className="dropdown dropdown-end  ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-[#2F75D0]">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-[#0A3D53]  text-white border-2 border-[#2F75D0]"
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
        </div>
      ) : (
        ""
      )}
      <label htmlFor="my-drawer-2" className="drawer-button lg:hidden text-2xl text-[#1B2850]">
        <GiHamburgerMenu />
      </label>
    </div>
  );
};

export default DashboardNav;
