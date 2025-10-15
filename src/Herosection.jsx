import React from "react";
import Spline from "@splinetool/react-spline"; // ✅ Correct import for React

function Herosection() {
  return (
    <header className="relative w-full min-h-screen bg-[#0a0114] text-white overflow-hidden flex flex-col pt-[20px]">
      {/* ===== Background Gradient Animation ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#7e22ce_0%,#0a0114_70%)] animate-[pulse_8s_infinite_alternate]" />

      {/* ===== Main Content (Text + 3D Spline) ===== */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full px-6 sm:px-10 md:px-16 lg:px-24 gap-10">

        {/* ===== Left Side: Text Section ===== */}
        <div className="flex flex-col justify-center items-start text-left max-w-[500px] md:max-w-[550px]">
          <h3 className="text-gray-400 text-sm sm:text-base tracking-widest mb-2">Hey, I'm</h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-[0_0_25px_#c084fc] leading-tight">
            Ammar Hassan
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            A passionate <span className="text-[#c084fc] font-medium">Frontend Developer</span> who loves
            building beautiful, modern & responsive web experiences using React &
            Tailwind CSS.
          </p>

          <button className="mt-6 sm:mt-8 px-6 sm:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-[#9333ea] to-[#c084fc] rounded-full font-semibold text-black hover:scale-105 transition-all duration-300 shadow-[0_0_25px_#9333ea]">
            View My Work
          </button>
        </div>

        {/* ===== Right Side: Spline 3D Model ===== */}
        <div className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl flex justify-center items-center overflow-hidden">
          <Spline
            scene="https://prod.spline.design/9yQJcAbE-ludp3-F/scene.splinecode"
            style={{ width: "180%", height: "180%", marginTop: "50px" }}
          />
        </div>
      </div>

      {/* ===== Social Icons ===== */}
      <div className="absolute left-6 sm:left-10 bottom-10 sm:bottom-16 flex flex-col gap-5 z-10">
        {["fa-brands fa-github", "fa-brands fa-linkedin", "fa-brands fa-instagram"].map(
          (icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-[#c084fc] transition-all text-xl sm:text-2xl"
            >
              <i className={icon}></i>
            </a>
          )
        )}
      </div>
    </header>
  );
}

export default Herosection;
