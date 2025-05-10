import Link from "next/link";
import React from "react";
import FirstSection from "../FirstSection";

const Hero = () => {
  return (
    <FirstSection containerClassName="bg-hero min-h-[calc(100vh-8rem)] w-full flex flex-col items-center justify-end py-[6.4rem]">
      <h1 className="font-cambon text-[7.6rem] text-white italic font-medium leading-[8.1rem] -tracking-[0.2rem] flex flex-col text-center ">
        <span>Empowering Intimacy,</span>
        <span>Naturally</span>
      </h1>
      <p className="font-roboto text-[2rem] text-[rgba(255,255,255,0.8)] leading-[2.9rem] font-light tracking-[0.1rem] mt-[1.6rem]">
        Natural treatments for STIs and intimate wellness, made with love and
        herbs.
      </p>
      <Link
        href={""}
        className="bg-[rgba(255,127,80,1)] py-[1.8rem] px-[3.2rem] rounded-[1.6rem] mt-[2.4rem] text-white font-roboto"
      >
        Explore Wellness
      </Link>
    </FirstSection>
  );
};

export default Hero;
