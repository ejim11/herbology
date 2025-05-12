import React from "react";
import Hero from "./Hero";
import Values from "./Values";
import ExploreWellness from "./ExploreWellness";
import WhyChooseUs from "../WhyChooseUs";
import FAQs from "../FAQs";

const AboutUsComp = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Values />
      <ExploreWellness />
      <section className="px-[8rem] max-xl:px-[5rem] max-xl:py-[8rem] max-lg:px-[3rem] max-md:px-[2rem] max-lg:py-[6rem] py-[12rem] bg-[rgba(245,247,251,1)]">
        <WhyChooseUs />
      </section>
      <FAQs />
    </div>
  );
};

export default AboutUsComp;
