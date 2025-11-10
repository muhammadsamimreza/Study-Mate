import { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import PartnerCard from "../PartnerCard/PartnerCard";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../Container/Container";

const FindPartner = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get("http://localhost:3000/allpartners");
        setPartners(res.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
      }
    };
    fetchPartners();
  }, []);

  // Search filter
  const filteredPartners = partners.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  const sortedPartners = [...filteredPartners].sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  return (
    <div className="bg-[#f9f9ff]">
      <Container>
        <div>
          <div>
            <h2 className="text-center text-4xl font-bold py-10">
              All <span className="text-amber-500">Partner</span>
            </h2>
          </div>
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              <IoIosArrowDown size={18} />
              Sort
            </button>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <FiSearch size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search partners..."
                className="ml-2 outline-none bg-transparent"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {sortedPartners.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {sortedPartners.map((partner) => (
                <PartnerCard key={partner._id} partner={partner} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-10">
              No partners found.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default FindPartner;
