import React from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import image1 from "../../assets/contact-us/image-1.png";
import ContactUsForm from "./ContactForm";

const Hero = () => {
  return (
    <FirstSection containerClassName="flex min-h-[calc(100vh-8rem)]  max-sm:flex-wrap">
      <div className="w-[50%] max-xmd:w-[45%]  h-[calc(100vh-8rem)] max-sm:w-full max-sm:h-[55rem]">
        <Image
          src={image1}
          alt="image 1 "
          priority
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="w-[50%] max-xmd:w-[55%] max-sm:w-full  px-[8rem] max-xl:px-[3rem] max-md:px-[2rem] flex flex-col  justify-center py-[3rem]">
        <h3 className="text-secondary-2 font-cambon  text-[4.8rem] max-smd:text-[3rem] border-b leading-[5.6rem] border-b-[rgba(61,90,92,0.15)] pb-[0.8rem] mb-[3rem]">
          Contact us
        </h3>
        <div className="w-full">
          <ContactUsForm />
        </div>
      </div>
    </FirstSection>
  );
};

export default Hero;
