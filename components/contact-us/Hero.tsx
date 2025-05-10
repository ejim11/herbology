import React from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import image1 from "../../assets/contact-us/image-1.png";
import ContactUsForm from "./ContactForm";

const Hero = () => {
  return (
    <FirstSection containerClassName="flex min-h-[calc(100vh-8rem)]">
      <div className="w-[50%] h-full">
        <Image
          src={image1}
          alt="image 1 "
          priority
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="w-[50%] px-[8rem] flex flex-col  justify-center">
        <h3 className="text-secondary-2 font-cambon  text-[4.8rem] border-b leading-[5.6rem] border-b-[rgba(61,90,92,0.15)] pb-[0.8rem] mb-[3rem]">
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
