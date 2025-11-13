import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthContext";
import axios from "axios";

const PartnerProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    profileimage: "",
    subject: "",
    studyMode: "Online",
    availabilityTime: "",
    location: "",
    experienceLevel: "Beginner",
    rating: 0,
    partnerCount: 0,
    email: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/allpartners", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    Swal.fire({
      icon: "success",
      title: "Profile Created!",
      text: "Your study profile has been successfully created.",
    });

    setFormData({
      name: user?.displayName || "",
      profileimage: "",
      subject: "",
      studyMode: "Online",
      availabilityTime: "",
      location: "",
      experienceLevel: "Beginner",
      rating: 0,
      partnerCount: 0,
      email: user?.email || "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 rounded-2xl shadow-lg bg-linear-to-br from-teal-50 via-white to-amber-50 border border-teal-100 mt-26">
      <title>studyMate-Partner-Profile</title>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Create Partner <span className="text-amber-500">Profile</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
            placeholder="Your full name"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Profile Image URL
          </label>
          <input
            type="text"
            name="profileimage"
            value={formData.profileimage}
            onChange={handleChange}
            placeholder="Paste image URL"
            required
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Math, English, Programming..."
            required
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          />
        </div>

        {/* Study Mode */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Study Mode
          </label>
          <select
            name="studyMode"
            value={formData.studyMode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Availability Time */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Availability Time
          </label>
          <input
            type="text"
            name="availabilityTime"
            value={formData.availabilityTime}
            onChange={handleChange}
            placeholder="Evening 6–9 PM"
            required
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, area or preferred location"
            required
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Experience Level
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Email*/}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full px-4 py-3 rounded-xl border 
            border-gray-300 bg-white text-gray-800 
            focus:ring-2 focus:ring-teal-400 focus:outline-none shadow-sm
            dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 
            dark:placeholder-gray-400"
          />
        </div>

        {/* Create Profile Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-lg text-white bg-linear-to-r from-amber-600 to-amber-400 hover:from-amber-400 hover:to-amber-600 shadow-md transition-transform transform hover:-translate-y-1"
          >
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerProfile;
