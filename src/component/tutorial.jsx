import React from "react";
import VideoPlayer from "../utilities/VideoPlayer";

function Tutorial() {
  return (
    <section className="flex justify-center items-center w-full min-h-[100dvh] bg-[#0B1D3A] text-white px-4 gap-4">
      <div className="w-full md:max-w-6xl mx-auto h-auto flex flex-col-reverse md:flex-row  justify-center ">
        <button className="border-b-2 border-[#1D4ED8]  md:hidden w-fit h-10  justify-center self-center mt-8">
          Try now
        </button>
        <div className="w-full  h-full justify-center  ">
          <VideoPlayer />
        </div>
        <div className="w-full min-w-xs gap-4 flex flex-col font-bold justify-between md:px-10  mb-4 md:mb-0 md:gap-0">
          <p className="text-[20px] font-normal">Watch how it works</p>
          <h2 className="text-[28px] md:text-[32px] leading-relaxed">
            Discover how we're transforming the dental care for{" "}
            <span className="text-[#F4A261]">patients</span> and{" "}
            <span className="text-[#F4A261]">clinics</span> alike
          </h2>

          <button className="border-b-2 border-[#1D4ED8] hidden md:block w-fit h-10 font-medium active:scale-95 active:translate-y-0.5 transition-transform ">
            Try now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tutorial;
