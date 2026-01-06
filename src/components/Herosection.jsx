import React from "react";
import Lottie from "lottie-react";
import Coworkers from "../assets/svg/Coworkers.json";
import Robotics from "../assets/svg/robotics curriculum.json";
import PC from "../assets/svg/pc.json";
import CD from "../assets/svg/CD.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col pt-24 justify-center bg-[rgb(1,83,106)] text-white overflow-hidden">
      {/* Top Banner */}
      {/* <div className="absolute top-24 left-8 z-10">
        <span className="bg-white/30 backdrop-blur-md border-b border-white/20 text-red-900 font-bold px-4 py-1 rounded-full shadow-lg text-sm">
           Transform Your Career Today
        </span>
      </div> */}

      {/* Top Right Lottie Animation */}
      <div className="absolute top-24 right-23 w-60 h-60 z-20">
        <Lottie animationData={Robotics} loop={true} />
      </div>
      <div className="absolute top-25 right-125 w-70 h-70 z-20">
        <Lottie animationData={PC} loop={true} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16 z-10 relative">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            TURN YOUR DEGREE <br /> INTO A DREAM <br /> CAREER
          </h1>
          <p className="mb-8 text-lg text-blue-100">
            Master in-demand skills with live industry training, real projects, and job opportunities at top tech firms.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition">Explore Programs</button>
            <button className="bg-blue-900 border border-white text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-blue-900 transition">Apply for Internship</button>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold">1,00,000+</div>
              <div className="text-blue-100 text-sm">Students</div>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-blue-100 text-sm">Companies</div>
            </div>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-150 h-100 pr-12">
            <Lottie animationData={CD} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
