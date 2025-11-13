import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Container from "../Container/Container";
import PartnerCard from "../PartnerCard/PartnerCard";
import { Link } from "react-router";
import { FaAngleDown } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../Loading/Loading";

const TopPartners = () => {
  const {loading, setLoading}= useContext(AuthContext)
  const [topStudyPartners, setTopStudyPartners] = useState([]);
  useEffect(() => {
    const topPartners = async () => {
      try {
        setLoading(true)
        const result = await axios.get("http://localhost:3000/top-partners");
        setTopStudyPartners(result.data);
      } catch (err) {
        console.error("Error fetching partners:", err);
      }finally{
        setLoading(false)
      }
    };
    topPartners();
  }, [setLoading]);

  return (
    <div className="pt-20 pb-10">
      <Container>
        <div>
          <h2 className="text-center text-4xl font-bold mb-14">
            Top Study <span className="text-amber-500">Partner</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {loading? <Loading></Loading>
          :topStudyPartners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>
        <div className="text-center mt-10">
            <Link to="/find-partner"
            className="btn btn-outline btn-warning animate-bounce hover:text-white hover:rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-700 ease-in-out w-40 hover:w-60 text-center"
            >
            Find More <FaAngleDown />
            </Link>
        </div>
      </Container>
    </div>
  );
};

export default TopPartners;
