import React from "react";
import Dropdown from "../utilities/dropdown";
import { cities, procedures } from "../dummyData";
import SearchButton from "../utilities/button";
function Hero() {
  return (
    <>
      <section className=" w-full min-h-[100dvh] bg-[url('/src/assets/Background.png')] bg-setting flex justify-start bg-black/30 bg-blend-overlay ">
        <div className="flex  justify-center px-3 flex-col dark:text-whit  ">
          <h1 className="text-3xl md:text-4xl leading-snug font-bold mt-10 md:max-w-2xl ">
            Find the Right Dental Clinic <br />
            <p className="inline">Fast,Easy & Affordable</p>
            <br />
            <p className="text-[16px] md:text-[20px] font-medium text-white/70 leading-relaxed w-full max-w-[400px] md:max-w-xl">
              Compared top-rated clinics and book your dental appointment in
              minutes
            </p>
          </h1>
          <div className="flex  gap-3 mt-3  flex-col md:flex-row  ">
            <Dropdown text={"Procedure"} MainData={procedures} />
            <Dropdown text={"Location"} MainData={cities} />
            <SearchButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
