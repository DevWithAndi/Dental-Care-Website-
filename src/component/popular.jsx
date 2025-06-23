import React from "react";
import Card from "../utilities/card";
import { MoreClinics } from "../utilities/button";

function Popular() {
  return (
    <section className="flex flex-col  w-full  text-black items-center  justify-center px-3 min-h-[100dvh] ">
      <div className=" w-full md:max-w-6xl  text-center justify-center flex flex-col my-8">
        {/* <h1 className="text-[16px] font-medium ">Popular Clinics</h1> */}
        <p className="font-bold text-center text-[24px] md:text-[32px]">
          Only the top 5% of dental clinics make this list
        </p>
        <p className="font-bold text-[24px] md:text-[32px] mb-3">
          You are in the hands of expert
        </p>
        <Card />
        <MoreClinics />
      </div>
    </section>
  );
}

export default Popular;
