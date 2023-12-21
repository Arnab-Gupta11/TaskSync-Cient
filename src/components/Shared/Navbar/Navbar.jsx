import { useState } from "react";
import HeadRoom from "react-headroom";
// import { Link } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { logoutUser, user } = useAuth();
  const link = (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 font-medium ">
        <div className="nav-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "cursor-pointer font-semibold text-lg border-b-4 border-b-[#337cdc] pb-1"
                : "cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#337cdc] pb-1"
            }
          >
            Home
          </NavLink>
        </div>
        {user ? (
          <div className="nav-item">
            <NavLink
              to="/dashboard/my-task"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "cursor-pointer font-semibold text-lg border-b-4 border-b-[#337cdc] pb-1"
                  : "cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#337cdc] pb-1"
              }
            >
              Dashboard
            </NavLink>
          </div>
        ) : (
          ""
        )}
        <div className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "cursor-pointer font-semibold text-lg border-b-4 border-b-[#337cdc] pb-1"
                : "cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#337cdc] pb-1"
            }
          >
            Contact us
          </NavLink>
        </div>

        {/* <div className="">
          <Link
            className="cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#00EEFF] pb-1 nav-item"
            to="skill"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Skills
          </Link>
        </div> */}
        {/* <div>
          <Link
            className="cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#00EEFF] pb-1"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </div> */}
        {/* <div>
          <Link
            className="cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#00EEFF] pb-1"
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Education
          </Link>
        </div> */}

        {/* <div>
          <Link
            className="cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#00EEFF] pb-1"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Projects
          </Link>
        </div> */}
        {/* <div>
          <Link
            className="cursor-pointer font-semibold text-lg hover:border-b-4 hover:border-b-[#00EEFF] pb-1"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Contact
          </Link>
        </div> */}
      </div>
    </>
  );

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 77.3) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <HeadRoom>
      <div
        className={
          navbar ? "w-full   fixed bg-[#0A3D53] transition-colors  z-10 text-white shadow-xl" : "w-full   fixed  z-10 text-white transition-colors"
        }
      >
        <div className="navbar max-w-screen-xl mx-auto font-sans">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="w-[calc(100vw-16px)] lg:w-0 menu menu-sm dropdown-content mt-[5px] z-50 p-2 shadow-xl bg-[#0A3D53] rounded-sm text-white text-center"
              >
                {link}
              </ul>
            </div>

            <a className="flex items-center gap-4">
              <Logo />
            </a>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white">{link}</ul>
            </div>
            {user ? (
              <div className="dropdown dropdown-end z-50 ml-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-14 rounded-full border-2 border-[#2F75D0]">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-[#0A3D53] rounded-box w-52 text-white border border-[#2F75D0]"
                >
                  <li>
                    <a className="text-xl font-semibold mb-0">{user?.displayName}</a>
                  </li>
                  <li>
                    <a className="mt-0">{user?.email}</a>
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

            <div className="ml-10">
              {user ? (
                ""
              ) : (
                <PrimaryBtn>
                  <Link to={"/login"}>Login</Link>
                </PrimaryBtn>
              )}
            </div>
          </div>
        </div>
      </div>
    </HeadRoom>
  );
};

export default Navbar;
