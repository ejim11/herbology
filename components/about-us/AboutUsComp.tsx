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
      <section className="px-[8rem] py-[12rem] bg-[rgba(245,247,251,1)]">
        <WhyChooseUs />
      </section>
      <FAQs />
    </div>
  );
};

export default AboutUsComp;
