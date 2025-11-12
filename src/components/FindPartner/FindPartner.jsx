import { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import PartnerCard from "../PartnerCard/PartnerCard";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";

const FindPartner = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const result = await axios.get("http://localhost:3000/allpartners");
        setPartners(result.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  // Search filter
  const filteredPartners = partners.filter((p) =>
    p.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting Advanced
  const experienceOrder = ["Beginner", "Intermediate", "Advanced"];
  const sortedPartners = [...filteredPartners].sort((a, b) => {
    const aIndex = experienceOrder.indexOf(a.experienceLevel);
    const bIndex = experienceOrder.indexOf(b.experienceLevel);
    return sortOrder === "asc" ? aIndex - bIndex : bIndex - aIndex;
  });

  return (
    <div className="bg-base-300 pb-10">
      <Container>
        <div>
          <div>
            <h2 className="text-center text-4xl font-bold py-10">
              All <span className="text-amber-500">Partner</span>
            </h2>
          </div>
          <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-4">
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              <IoIosArrowDown
                className={`text-gray-500 dark:text-gray-800 transition-transform ${
                  sortOrder === "asc" ? "rotate-180" : ""
                }`}
                size={18}
              />
              <span className="text-gray-500 dark:text-gray-800">Sort by Experience ({sortOrder === "asc" ? "↑" : "↓"})</span>
            </button>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <FiSearch size={18} className="text-gray-500 dark:text-gray-800" />
              <input
                type="text"
                placeholder="Search partners..."
                className="ml-2 text-gray-500 dark:text-gray-800 outline-none bg-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <Loading></Loading>
          ) : sortedPartners.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {sortedPartners.map((partner) => (
                <PartnerCard key={partner._id} partner={partner} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-10">
              No partners matching your search.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FindPartner;
