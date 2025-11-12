import { Link } from "react-router";

const PartnerCard = ({ partner }) => {
  return (
    <div
      className="bg-linear-to-b from-[#70e1f5b9] via-amber-100 to-[#70e1f5b9] hover:bg-linear-to-r  shadow-lg rounded-2xl p-6 flex flex-col items-center text-center 
      border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      {/* Profile Image */}
      <div className="relative mb-4">
        <img
          src={partner.profileimage}
          alt="Partner"
          className="w-24 h-24 rounded-full object-cover border-4 border-teal-500 shadow-md"
        />
        <div className="absolute inset-0 rounded-full bg-teal-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-gray-800 tracking-wide">
        {partner?.name || "Tamim"}
      </h2>

      {/* Subject */}
      <p className="mt-1 text-sm text-gray-600">
        <span className="font-medium text-gray-700">Subject:</span>{" "}
        {partner?.subject || "Chemistry"}
      </p>

      {/* Mode & Experience on one line */}
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-medium text-gray-700">Mode:</span>{" "}
        {partner?.studyMode || "Online"}
        <span className="mx-2 text-gray-400">|</span>
        <span className="font-medium text-gray-700">Experience:</span>{" "}
        {partner?.experienceLevel || "2"}
      </p>

      {/* Button */}
      <Link
        to={`/PartnerDetails/${partner._id}`}
        className="mt-5 bg-linear-to-r from-amber-600 to-amber-400 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:from-amber-400 hover:to-amber-600 transition-all duration-700 ease-in-out w-40 hover:w-full text-center"
      >
        View Profile
      </Link>
    </div>
  );
};

export default PartnerCard;
