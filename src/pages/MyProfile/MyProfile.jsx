import React, { use } from "react";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContext";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");

  const handleProfile = (event) => {
    event.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setSuccess("Profile updated successfully!");
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile updated successfully!");
        setName("");
        setPhotoURL("");
        setTimeout(() => setSuccess(""), 3000);
      })
      .catch((error) => {
        toast.error(`${error.message} Try Again`);
      });
  };

  return (
    <div className="flex flex-col items-center py-10">
      <title>ToyTopia-My Profile</title>
      <div className="bg-amber-50 text-amber-600 p-8 rounded-2xl shadow-md w-[400px] text-center">
        <h2 className="text-2xl font-bold mb-5 text-amber-600">My Profile</h2>

        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow"
          />
        ) : (
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
            <FaUser></FaUser>
          </div>
        )}

        <p className="font-semibold">Name: {user?.displayName || "No Name"}</p>
        <p className="font-extrabold content-font text-gray-600">
          Email: {user?.email}
        </p>
        <div className="pt-3">
          {" "}
          <h1 className="flex items-center gap-5 text-center font-semibold">
            <span className="w-full border border-amber-300"></span>
            <span className="w-full border border-amber-300"></span>
          </h1>
        </div>
        <form
          onSubmit={handleProfile}
          className="mt-6 space-y-4 text-gray-500 text-left"
        >
          <div>
            <label className="block text-sm mb-2 font-medium text-gray-500">
              New Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter new name"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-medium text-gray-500">
              New Photo URL
            </label>
            <input
              type="text"
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full text-xs  bg-gray-100 rounded-lg px-2 py-3 focus:ring-1 focus:ring-gray-400 outline-none"
              placeholder="Enter new photo URL"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Update Profile
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600 font-semibold">{success}</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
