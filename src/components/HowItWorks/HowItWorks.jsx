// import React from "react";
// import { FaBookOpen, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaBookOpen className="text-4xl text-blue-500 mb-4" />,
//       title: "Choose Your Course",
//       description: "Browse and select from a wide range of courses that fit your learning goals.",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-4xl text-blue-500 mb-4" />,
//       title: "Learn from Experts",
//       description: "Get lessons and guidance from experienced tutors in interactive sessions.",
//     },
//     {
//       icon: <FaCheckCircle className="text-4xl text-blue-500 mb-4" />,
//       title: "Track Your Progress",
//       description: "Monitor your learning and achieve milestones with our easy tracking system.",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
//             >
//               {step.icon}
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import React from "react";
import "./HowItWorks.css";
import Container from "../Container/Container";

const HowItWorks = () => {
  return (
    <div className="bg-[#f9f9ff]">
      <Container>
        <section className="howItWorks">
          <h2 className="howItWorks-title">
            How It <span className="text-amber-500">Works</span>
          </h2>
          <p className="howItWorks-subtitle">
            Study Mate empowers students through collaboration, structure, and
            motivation — making learning smoother and more engaging.
          </p>

          <div className="space-y-10">
            <div className="grid grid-cols-10 gap-10">
              {/* Step 1 */}
              <div className="col-span-6 howItWorks-card rounded-2xl border-2 border-amber-500 bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd]">
                <div className="howItWorks-step bg-amber-600">1</div>
                <div className="">
                  <h3>Create a Study Plan</h3>
                  <p>
                    Organize your subjects and goals to kickstart a personalized
                    study experience.
                  </p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                    alt="Create a Study Plan"
                    className="howItWorks-image"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-span-4 rounded-2xl howItWorks-card border-2 border-yellow-200 bg-yellow-50">
                <div className="howItWorks-step">2</div>
                <h3>Invite Study Buddies</h3>
                <p>
                  Bring in friends or classmates — collaboration makes studying
                  more effective.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
                  alt="Invite Buddies"
                  className="howItWorks-image"
                />
              </div>
            </div>
            <div className="grid grid-cols-10 gap-10">
              {/* Step 3 */}
              <div className="col-span-4 rounded-2xl howItWorks-card border-2 border-yellow-200 bg-yellow-50">
                <div className="howItWorks-step">3</div>
                <h3>Begin Collaborating</h3>
                <p>
                  Share notes, quiz each other, and keep everyone motivated
                  along the way.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                  alt="Collaborate"
                  className="howItWorks-image"
                />
              </div>

              {/* Step 4 */}
              <div className="col-span-6 rounded-2xl howItWorks-card border-2 border-yellow-200 bg-yellow-50">
                <div className="howItWorks-step">4</div>
                <h3>Achieve Success</h3>
                <p>Track your progress and celebrate academic wins together!</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4072/4072282.png"
                  alt="Achieve Success"
                  className="howItWorks-image"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HowItWorks;
