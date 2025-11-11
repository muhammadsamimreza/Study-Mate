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
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Create Partner Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block mb-1 font-medium">Profile Image URL</label>
          <input
            type="text"
            name="profileimage"
            value={formData.profileimage}
            onChange={handleChange}
            placeholder="Paste image URL"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Math, English, Programming..."
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Study Mode */}
        <div>
          <label className="block mb-1 font-medium">Study Mode</label>
          <select
            name="studyMode"
            value={formData.studyMode}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        {/* Availability Time */}
        <div>
          <label className="block mb-1 font-medium">Availability Time</label>
          <input
            type="text"
            name="availabilityTime"
            value={formData.availabilityTime}
            onChange={handleChange}
            placeholder="Evening 6–9 PM"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, area or preferred location"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block mb-1 font-medium">Experience Level</label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Create Profile Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded font-semibold"
          >
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerProfile;
