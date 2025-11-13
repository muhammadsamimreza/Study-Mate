import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import logo from "/logo.png";
import Container from "../Container/Container";
import { AuthContext } from "../../Provider/AuthContext";
import { FaRegUser, FaHome } from "react-icons/fa";
import Swal from "sweetalert2";
import { RiTeamFill } from "react-icons/ri";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPersonArrowDownToLine } from "react-icons/fa6";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const { user, logOut, loading} = useContext(AuthContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate()
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
        setScrollDirection("down");
      } else {
        // scrolling up
        setShowNavbar(true);
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
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
        logOut(navigate)
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
  if(loading) return <Loading></Loading>
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
  ${showNavbar ? "translate-y-0" : "-translate-y-full"}
  ${
    scrollDirection === "up"
      ? "backdrop-blur-2xl bg-gray-300 to-transparent"
      : "bg-gray-300"
  }
  text-white
`}
    >
      <Container>
        <nav className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:h-6 md:w-6"
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
              {user ? (
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 text-black dark:text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to="/">
                      {" "}
                      <FaHome></FaHome> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/find-partner">
                      <RiTeamFill />
                      Find Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/create-partner">
                      <FaPersonArrowDownToLine />
                      Create Partner Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-connection">
                      <BsPersonFillAdd />
                      My Connections
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 text-black dark:text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to="/">
                      <FaHome></FaHome>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/find-partner">
                      <RiTeamFill />
                      Find Partners
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <div className="flex items-center gap-1 md:gap-0">
              <img className="w-6 md:w-8" src={logo} alt="" />
              <Link to="/" className="md:text-xl font-bold text-amber-600">
                STUDY MATE
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            {user ? (
              <ul className="menu gap-2 menu-horizontal text-black px-1">
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/find-partner">
                    <RiTeamFill />
                    Find Partners
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/create-partner">
                    <FaPersonArrowDownToLine />
                    Create Partner Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-connection">
                    <BsPersonFillAdd />
                    My Connections
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="menu gap-2 menu-horizontal text-black px-1">
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/find-partner">
                    <RiTeamFill />
                    Find Partners
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="navbar-end gap-3">
            {/* <div>{user && <h1> {user.displayName} </h1>}</div> */}
            <div className="flex items-center gap-5">
              <div className="flex items-center justify-center bg-gray-400 border rounded-2xl">
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem("theme") === "dark"}
                  className="toggle"
                />
              </div>
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
                      className="dropdown-content menu bg-base-100 text-black dark:text-white mt-2 rounded-box z-1 w-52 p-2 shadow-sm"
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
                      className="dropdown-content menu bg-base-100 text-black dark:text-white rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <Link to="my-profile"> My Profile</Link>
                      </li>
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
                    className="btn hidden md:flex btn-outline text-black hover:text-white border-white hover:bg-amber-500"
                  >
                    {" "}
                    Register{" "}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
