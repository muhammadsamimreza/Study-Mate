import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import Container from "../components/Container/Container";
import loginImage from "../assets/loginImage.jpg";
import { IoMdLogIn } from "react-icons/io";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn, setUser,signInGoogle,setTempEmail} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully Login");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.warn(err.message);
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
   const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setTempEmail(value); 
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <title>studyMate-Login</title>
      <Container>
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-20 p-6 lg:p-10 ">
          <div className="lg:w-1/2 shadow max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
            <div className="mb-10">
              <h2 className="text-2xl text-amber-600 font-semibold text-center">Log In Your Account</h2>
              {/* <p className="text-xl text-center font-semibold">Get More Partners With Login</p> */}
            </div>
            <form onSubmit={handleLogin} className="space-y-4 text-gray-500">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="studymate@email.com"
                  className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
              </div>
              {/* password */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-10 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
                <Link to="/forgotpassword" className="underline text-xs mt-1">
                  Forgot password?
                </Link>
              </div>

              <div className="flex gap-5">
                <button
                type="submit"
                className="btn bg-amber-500 hover:bg-amber-600 text-white w-[47%] duration-300 transform mt-2"
              >
                Log in
              </button>
              <Link
                  to="/register"
                  className="btn btn-outline outline-amber-600 text-amber-600  hover:bg-amber-500 hover:text-white w-[47%] duration-300 transform mt-2"
                >
                  Register
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
              className=" hover:scale-120 hover:bg-amber-500 px-2 py-1 rounded duration-300 transition-transform "
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
          <div className="hidden md:flex lg:w-1/2 text-center lg:text-left">
            <img src={loginImage} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
