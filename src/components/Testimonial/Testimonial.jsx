import React from "react";
import { FaStar } from "react-icons/fa";
import Container from "../Container/Container";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      feedback:
        "Study Mate has completely changed the way I learn. The courses are engaging and easy to follow!",
      rating: 5,
    },
    {
      name: "Rahim Ahmed",
      feedback:
        "Excellent platform! The tutors are knowledgeable and really helpful. Highly recommend.",
      rating: 4,
    },
    {
      name: "Sara Williams",
      feedback:
        "I love the progress tracking feature. It keeps me motivated every day.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow hover:shadow-lg bg-[#baeff88d] hover:bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd] hover:scale-102 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.feedback}"</p>
                <h4 className="text-lg font-semibold">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
