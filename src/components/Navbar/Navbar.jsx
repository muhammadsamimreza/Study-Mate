import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.jpg";
import Container from "../Container/Container";
import { AuthContext } from "../../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaRegUser, FaUserAltSlash } from "react-icons/fa";

const Navbar = () => {
  const {user, logOut,} = use(AuthContext)

  const handleLogOut = () => {
      logOut()
        .then(() => {
          toast.warn("Log-out successful.");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
  return (
    <div className="bg-amber-100">
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
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Find Partners</NavLink>
              </li>
            </ul>
          </div>
         <div className="navbar-end gap-3">
            {/* <div>{user && <h1> {user.displayName} </h1>}</div> */}
            <div
              className="w-10 tooltip tooltip-bottom"
              data-tip={user ? user?.displayName : "No User"}
            >
              {user ? (
                user?.photoURL ? (
                  <Link to="/myprofile"> <img
                    className="w-10 h-10 rounded-full object-cover border"
                    alt="User"
                    src={user.photoURL}
                  /> </Link>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-gray-500">
                    <FaRegUser size={20} />
                  </div>
                )
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center text-gray-500">
                    <FaUserAltSlash size={20}/>
                  </div>
              )}
            </div>
            <div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-amber-500 hover:bg-amber-600 text-white"
                >
                  {" "}
                  Login{" "}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
