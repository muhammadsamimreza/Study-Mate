import React, { use, useState } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import loginImage from "../../assets/loginImage.jpg";
import Container from "../../components/Container/Container";
import { AuthContext } from "../../Provider/AuthContext";
import { auth } from "../../firebase/firebase.config";


const ForgotPassword = () => {
  const { tempEmail } = use(AuthContext);
  const [email, setEmail] = useState(tempEmail || "");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleforgotPass = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSubmitted(true);
        toast.success("Password reset email sent successfully!");
        setTimeout(() => {
          setSubmitted(false);
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="mt-10 rounded-2xl">
      <title>studyMate-reset Password</title>
      <Container>
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-around gap-10 p-6 lg:p-10 ">
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="space-y-2 text-2xl text-amber-600 font-semibold mb-6 text-center">
              <img className="w-40 mx-auto" src={loginImage} alt="" />
             <span> Reset Your Password !</span>
            </h2>
            <form onSubmit={handleforgotPass} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:scale-102 text-white font-semibold py-2 rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Update Your Password
              </button>
              {submitted && (
                <p className="text-green-500 font-medium mt-3">
                  Thank you! Your request has been submitted successfully.
                </p>
              )}
            </form>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#f5560c] font-extrabold drop-shadow-lg">
              Forgot Your Password?
            </h1>
            <p className="w-[90%] md:w-[70%] mx-auto lg:w-full mt-4 text-[#f5560cbb] lg:text-lg leading-relaxed">
              Enter your registered email, and we'll send you a link to reset
              your password.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
