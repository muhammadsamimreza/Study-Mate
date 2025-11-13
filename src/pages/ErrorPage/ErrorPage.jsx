import React from "react";

const ErrorPage = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <title>Erorr-Page</title>
      <img
        src="https://i.ibb.co.com/tTwJY3c1/404.webp"
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-cover opacity-70 backdrop-blur-sm"
      />
      <div className="relative w-[40%] text-center bg-white/50 p-8 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">Oops...</h1>
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist
        </p>
        <a
          href="/"
          className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
