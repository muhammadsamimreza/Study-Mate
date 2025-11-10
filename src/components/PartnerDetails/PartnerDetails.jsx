import { Link, useParams } from "react-router";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";

const PartnerDetails = () => {
  const [partner, setPartners] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`http://localhost:3000/partnerDetails/${id}`);
        setPartners(result.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, [id]);

//  console.log(partner)
  // const partner = {
  //   _id: "6911a7fc04689e6e88fd76ad",
  //   id: "3",
  //   name: "Nusrat Jahan",
  //   profileimage: "https://i.ibb.co/8zsJxYH/student2.jpg",
  //   subject: "Chemistry",
  //   studyMode: "Online",
  //   availabilityTime: "Night 9-11 PM",
  //   location: "Rajshahi, Bangladesh",
  //   experienceLevel: "Advanced",
  //   rating: 5,
  //   patnerCount: 0,
  //   email: "nusrat.jahan@example.com",
  // };

  // SweetAlert2 handler
  const handleRequest = () => {
    Swal.fire({
      title: "Send Request?",
      text: `Do you want to send a request to ${partner.name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#14b8a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send it!",
      cancelButtonText: "Cancel",
      background: "#f9fafb",
      customClass: {
        popup: "rounded-2xl shadow-lg",
        confirmButton: "rounded-md font-semibold",
        cancelButton: "rounded-md font-semibold",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Request Sent! 🎉",
          text: `Your request has been successfully sent to ${partner.name}.`,
          icon: "success",
          confirmButtonColor: "#14b8a6",
          background: "#f9fafb",
          customClass: {
            popup: "rounded-2xl shadow-lg",
            confirmButton: "rounded-md font-semibold",
          },
        });
      }
    });
  };
 if (loading) <Loading></Loading>

  if (!partner)
    return (
      <div className="flex justify-center items-center h-[80vh] text-lg text-red-500">
        No partner data found!
      </div>
    );
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-teal-50 to-teal-100 py-10 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-teal-200/70">
        {/* Header Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1710162734135-8dc148f53abe?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1032"
            alt="Background"
            className="w-full h-48 object-cover"
          />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={partner.profileimage}
              alt={partner.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-20 text-center px-6 pb-10">
          <h2 className="text-3xl font-bold text-gray-800">{partner.name}</h2>
          <p className="text-teal-600 font-semibold text-sm mt-1 tracking-wide">
            {partner.subject} • {partner.studyMode}
          </p>

          {/* Rating */}
          <div className="flex justify-center items-center mt-3 text-yellow-400">
            {[...Array(partner.rating)].map((_, i) => (
              <FaStar key={i} className="mr-1" />
            ))}
          </div>

          {/* Send Request Button */}
          <button
            onClick={handleRequest}
            className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-teal-300"
          >
            Send Me Request
          </button>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-left">
            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-teal-50 transition">
              <FaUserGraduate className="text-teal-600 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Experience Level</p>
                <p className="font-semibold text-gray-800">
                  {partner.experienceLevel}
                </p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-teal-50 transition">
              <FaClock className="text-teal-600 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-semibold text-gray-800">
                  {partner.availabilityTime}
                </p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-teal-50 transition">
              <FaMapMarkerAlt className="text-teal-600 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">
                  {partner.location}
                </p>
              </div>
            </div>

            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-teal-50 transition">
              <FaEnvelope className="text-teal-600 mr-3 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">{partner.email}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 bg-teal-50 rounded-xl p-4 flex items-center justify-between shadow-inner">
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-teal-600">
                {partner.patnerCount}
              </p>
              <p className="text-gray-600 text-sm">Partners Found</p>
            </div>
            <div className="border-l border-gray-200 h-10"></div>
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-teal-600">
                {partner.rating}/5
              </p>
              <p className="text-gray-600 text-sm">Rating</p>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-between items-center">
            <Link
              to="/find-partner"
              className="mt-8 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-300"
            >
              ← Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
