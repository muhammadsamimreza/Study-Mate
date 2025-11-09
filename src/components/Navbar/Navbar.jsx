import React, { use, } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.jpg";
import Container from "../Container/Container";
import { AuthContext } from "../../Provider/AuthContext";
import { FaRegUser, FaHome } from "react-icons/fa";
import Swal from "sweetalert2";
import { RiTeamFill } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPersonArrowDownToLine } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
// const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  // useEffect(() => {
  //   const html = document.querySelector('html')
  //    html.setAttribute("data-theme", theme)
  //    localStorage.setItem("theme", theme)
  // }, [theme])


  // const handleTheme = (checked) => {
  //   setTheme(checked ? "dark": "light")
  // }
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have been successfully logged out.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong during logout.",
              icon: "error",
            });
            console.error(error);
          });
      }
    });
  };

  return (
    <div className=" shadow">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              ></ul>
            </div>
            <div className="flex items-center">
              <img className="w-10" src={logo} alt="" />
              <Link to="/" className="text-xl font-bold">
                STUDY MATE
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            {user ? (
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink>
                    {" "}
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <RiTeamFill />
                    Find Partners
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaPersonArrowDownToLine />
                    Create Partner Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <BsPersonFillAdd />
                    My Connections
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink>
                    <FaHome></FaHome>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <RiTeamFill />
                    Find Partners
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="navbar-end gap-3">
            {/* <div>{user && <h1> {user.displayName} </h1>}</div> */}
            <div>
              {user ? (
                user?.photoURL ? (
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                      <img
                        className="w-10 h-10 rounded-full object-cover border"
                        alt="User"
                        src={user.photoURL}
                      />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <Link to="my-profile"> My Profile</Link>
                      </li>
                      <li>
                        <button onClick={handleLogOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-gray-500">
                        <FaRegUser size={20} />
                      </div>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <Link to="my-profile"> My Profile</Link>
                      </li>
                      {/* <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={
                          localStorage.getItem("theme") === "dark"
                        }
                        className="toggle"
                      /> */}
                      <li>
                        <button onClick={handleLogOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                )
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="btn bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    {" "}
                    Login{" "}
                  </Link>
                  <Link
                    to="/register"
                    className="btn bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    {" "}
                    Register{" "}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
