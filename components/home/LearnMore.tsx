import Image from "next/image";
import React from "react";
import learnMoreImg from "../../assets/home/learn-more.png";
import Link from "next/link";

const LearnMore = () => {
  return (
    <div className="mt-[8rem] relative flex flex-col py-[7.2rem] mb-[5rem] min-h-[50rem] text-center w-[65%] max-xl:w-[75%] max-lg:w-[85%] max-md:w-[95%] max-sm:w-full  mx-auto justify-end items-center">
      <div className="w-full h-[38.6rem] absolute -top-[18rem]">
        <Image
          src={learnMoreImg}
          alt="learn more image"
          priority
          width={1000}
          height={500}
          className="w-full h-full"
        />
      </div>
      <p className="w-[80%] font-roboto max-sm:w-full max-ssm:mt-[16rem]">
        We are dedicated to promoting intimate health and confidence through
        safe, effective, and all-natural remedies. Our herbal solutions are
        carefully curated to support the treatment of sexually transmitted
        infections, enhance libido with aphrodisiacs, and nourish your body with
        wellness supplements.
      </p>
      <Link
        href={"/"}
        className="bg-[rgba(255,127,80,1)] py-[1.8rem] px-[3.2rem] rounded-[1.6rem] mt-[2.4rem] text-white font-roboto"
      >
        Learn more
      </Link>
    </div>
  );
};

export default LearnMore;
