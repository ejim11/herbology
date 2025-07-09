// import Link from "next/link";
import React from "react";

const ExploreWellness = () => {
  return (
    <section className="h-[85rem] bg-wellness bg-fixed max-lg:bg-local flex flex-col items-center justify-center py-[8rem]">
      <h1 className="text-[5.4rem] max-smd:text-[3.5rem] text-white font-cambon leading-[5.3rem] -tracking-[0.2rem] w-[40%] max-2xl:w-[40%] max-lg:w-[50%] max-md:w-[60%]  max-sm:w-[90%] text-center uppercase">
        Your path to confident, natural wellness starts here
      </h1>
      {/* <Link
        href={""}
        className="bg-[rgba(255,127,80,1)] py-[1.8rem] px-[3.2rem] rounded-[1.6rem] mt-[2.4rem] text-white font-roboto"
      >
        Explore Wellness
      </Link> */}
    </section>
  );
};

export default ExploreWellness;
