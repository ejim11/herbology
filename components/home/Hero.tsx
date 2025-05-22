import Link from "next/link";
import React from "react";
import FirstSection from "../FirstSection";

const Hero = () => {
  return (
    <FirstSection containerClassName="bg-hero min-h-screen w-full flex home-hero  ">
      <div className=" flex flex-col justify-center px-[8rem]  max-xl:px-[5rem] max-lg:px-[3rem]   py-[6.4rem]  max-md:px-[2rem] bg-[rgba(0,0,0,0.2)]min-h-[calc(100vh-8rem)] w-full">
        <div className="w-[45%] max-xmd:w-[55%] max-smd:w-full max-smd:text-center">
          <p className="text-[rgba(255,127,80,1)] font-roboto uppercase text-[1.3rem] tracking-[3%] mb-[1.6rem]">
            Shop organic remedies for a healthier you.
          </p>
          <h1 className="font-cambon  text-[7.6rem] max-smd:text-[6rem] text-white italic font-medium leading-[8.1rem] -tracking-[0.2rem] mb-[3.7rem] ">
            Feel Better, Naturally
          </h1>
          <p className="font-roboto text-[2rem] text-[rgba(255,255,255,0.7)] leading-[2.9rem] font-light tracking-[0.1rem] mb-[3.2rem]">
            Explore our carefully curated collection of herbal products and
            experience pure, organic wellness
          </p>
          <Link
            href={""}
            className="bg-[rgba(255,127,80,1)] py-[1.8rem] px-[3.2rem] rounded-[1.6rem] mt-[2.4rem] w-max text-white font-roboto"
          >
            Explore Wellness
          </Link>
        </div>
      </div>
    </FirstSection>
  );
};

export default Hero;
