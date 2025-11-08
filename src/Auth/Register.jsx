import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import loginImage from "../assets/loginImage.jpg";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Provider/AuthContext";
import Container from "../components/Container/Container";

const Register = () => {
  const { createUser, setUser, signInGoogle } = use(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.warn(
        "Password must have: At least one uppercase and lowercase letter and Minimum 6 characters"
      );
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            toast.success("Successfully Registered !");
            navigate("/");
            e.target.reset();
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((err) => {
        console.error("Google Login Error:", err);
        toast.warn(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <title>studyMate-Register</title>
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-20 p-6 lg:p-10 ">
          <div className="hidden md:flex lg:w-1/2 text-center lg:text-left">
                      <img src={loginImage} alt="" />
                    </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow rounded-2xl p-8">
            <h2 className="text-2xl text-amber-600 font-bold mb-6 text-center">
              Register
            </h2>

            <form onSubmit={handleRegister} className="space-y-4 text-gray-500">
              {/* name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name here.."
                  required
                  className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm  font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="toytopia@email.com"
                  className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
              </div>
              {/* photo URL  */}
              <div>
                <label className="block text-sm  font-medium mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL here"
                  className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
              </div>
              {/* password */}
              <div className="relative">
                <label className="block text-sm  font-medium mb-2">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-10 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="btn bg-amber-500 hover:bg-amber-600 text-white w-[47%] duration-300 transform mt-2"
                >
                  Register
                </button>
                <Link
                  to="/login"
                  className="btn btn-outline outline-amber-600 text-amber-600  hover:bg-amber-500 hover:text-white w-[47%] duration-300 transform mt-2"
                >
                  Login
                </Link>
              </div>
            </form>
            <div className="py-3">
              {" "}
              <h1 className="flex items-center gap-5 text-center font-semibold">
                <span className="w-full border border-amber-300"></span> or
                <span className="w-full border border-amber-300"></span>
              </h1>
            </div>
            {/* Google */}
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-gray-500"> login with</h3>
              <button
              type="button"
              onClick={handleGoogleLogin}
              className=" hover:scale-120 duration-300 hover:bg-amber-500 px-2 py-1 rounded transition-transform "
            >
              <svg
                aria-label="Google logo"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="rounded-full"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
            </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
