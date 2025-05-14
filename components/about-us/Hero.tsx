import React from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import image1 from "../../assets/about-us/image-1.png";

const Hero = () => {
  return (
    <FirstSection containerClassName="flex min-h-[calc(100vh-8rem)] max-smd:flex-wrap">
      <div className="w-[50%]  max-smd:w-full max-smd:h-[55rem]">
        <Image
          src={image1}
          alt="image 1 "
          priority
          width={1000}
          height={1000}
          className="w-full h-full max-xlg:object-cover "
        />
      </div>
      <div className="w-[50%] max-smd:w-full  flex flex-col justify-center px-[4.8rem] max-xl:px-[3rem] font-roboto max-md:px-[2rem] py-[3rem]">
        <p className="text-[1.3rem] text-[rgba(61,90,92,1)] leading-[100%] uppercase">
          who we are
        </p>
        <h3 className="font-cambon font-medium text-[4.8rem] max-smd:text-[3rem] leading-[5.6rem] -tracking-[0.rem] text-secondary-2 flex flex-col mt-[1.6rem] mb-[2.4rem] max-sm:flex-row max-sm:flex-wrap">
          <span>Intimate Wellness,</span>
          <span>Powered by Nature</span>
        </h3>
        <p className="text-[1.4rem] text-secondary-1 leading-[2.6rem]">
          At Herbology, we believe that true healing starts from within—and with
          the earth. We are passionate about helping people reconnect with their
          bodies and reclaim their confidence through natural, plant-based
          solutions.
        </p>
        <p className="text-[1.4rem] text-secondary-1 leading-[2.6rem] mt-[2.5rem]">
          Our mission is simple: to provide safe, effective, and holistic herbal
          treatments for intimate health and overall wellness. Whether
          you&apos;re looking to treat sexually transmitted infections
          naturally, boost your libido with herbal aphrodisiacs, or maintain
          balance with our wellness supplements, Herbology offers a trusted path
          to healing—rooted in centuries of herbal wisdom.
        </p>
      </div>
    </FirstSection>
  );
};

export default Hero;
