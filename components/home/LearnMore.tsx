import Image from "next/image";
import React from "react";
import learnMoreImg from "../../assets/home/learn-more.png";
import learnMoreImg2 from "../../assets/home/learn-more-mobile.png";
import Link from "next/link";

const LearnMore = () => {
  return (
    <div className="mt-[8rem] max-ssm:mt-0 relative flex flex-col py-[7.2rem] max-ssm:py-[5rem] mb-[5rem] min-h-[50rem]  text-center w-[65%] max-xl:w-[75%] max-lg:w-[85%] max-md:w-[95%] max-sm:w-full  mx-auto justify-end max-sm:pb-0 max-sm:justify-start max-sm:min-h-0 max-sm:h-max items-center">
      <div className="w-full h-[38.6rem] max-sm:h-auto absolute -top-[18rem] max-ssm:hidden">
        <Image
          src={learnMoreImg}
          alt="learn more image"
          priority
          width={1000}
          height={500}
          className="w-full h-full "
        />
      </div>
      <div className="w-full hidden max-ssm:block mb-[3rem]">
        <Image
          src={learnMoreImg2}
          alt="learn more image"
          priority
          width={1000}
          height={500}
          className="w-full h-full "
        />
      </div>
      <p className="w-[80%] font-roboto max-sm:w-full ">
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
