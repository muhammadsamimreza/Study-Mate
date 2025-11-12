import React from "react";
import "./HowItWorks.css";
import Container from "../Container/Container";
import planImg from "../../assets/planImg.png";
import planImg2 from "../../assets/collaborate.png";
import planImg3 from "../../assets/success2.png";

const HowItWorks = () => {
  return (
    <div className="bg-base-300">
      <Container>
        <section className="howItWorks">
          <h2 className="howItWorks-title dark:text-gray-300">
            How It <span className="text-amber-500">Works</span>
          </h2>
          <p className="howItWorks-subtitle dark:text-gray-400">
            Study Mate empowers students through collaboration, structure, and
            motivation — making learning smoother and more engaging.
          </p>

          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
              {/* Step 1 */}
              <div className="md:col-span-6 howItWorks-card rounded-2xl border-2 border-amber-500 bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd]">
                    <div className="howItWorks-step bg-amber-600">1</div>
                <div className=" flex justify-between items-center">
                  <div className="w-full lg:w-[60%]">
                    <h3>Create a Study Plan</h3>
                    <p className="text-justify">
                      Organize your subjects and goals to kickstart a
                      personalized study experience.Map out your learning goals, organize subjects, and design a personalized schedule that keeps you focused and consistent.
                    </p>
                  </div>
                  <div className="md:w-[40%] hidden lg:flex">
                    <img
                      src={planImg}
                      alt="Create a Study Plan"
                      className="w-44 mx-auto "
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:col-span-4 rounded-2xl howItWorks-card border-2 border-amber-500 bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd]">
                <div className="howItWorks-step bg-amber-600">2</div>
                <div className="flex items-center justify-between gap-2">
                  <div className="w-full lg:w-[60%]">
                    <h3>Invite Study Buddies</h3>
                    <p className="text-justify">
                      Bring in friends or classmates — collaboration makes
                      studying more effective.
                    </p>
                  </div>
                  <div className="md:w-[40%] hidden lg:flex">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                      alt="Collaborate"
                      className=" "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
              {/* Step 3 */}
              <div className="md:col-span-4 rounded-2xl howItWorks-card border-2 border-amber-500 bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd]">
                <div className="howItWorks-step bg-amber-500">3</div>
                <div className="flex items-center justify-between">
                  <div className="w-full lg:w-[60%]">
                    <h3>Begin Collaborating</h3>
                    <p className="text-justify">
                      Share notes, quiz each other, and keep everyone motivated
                      along the way.
                    </p>
                  </div>
                  <div className="md:w-[40%] hidden lg:flex">
                    <img
                      src={planImg2}
                      alt="Collaborate"
                      className=" "
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:col-span-6 rounded-2xl howItWorks-card border-2 border-amber-500 bg-linear-to-r from-[#70e1f5b9] to-[#ffd194bd]">
                <div className="howItWorks-step bg-amber-500">4</div>
                <div className="flex items-center justify-between">
                  <div className="w-full lg:w-[60%]">
                    <h3>Achieve Success</h3>
                    <p className="text-justify">
                      Track your progress and celebrate academic wins together! Learning together with peers makes the journey enjoyable. Support, share, and grow alongside fellow students.
                    </p>
                  </div>
                  <div className="md:w-[40%] hidden lg:flex">
                    <img
                      src={planImg3}
                      alt="Achieve Success"
                      className="mx-auto w-50 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HowItWorks;
