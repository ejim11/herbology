import React from "react";
import Hero from "./Hero";
import HerbsMeetIntimacy from "./HerbsMeetIntimacy";
import LearnMore from "./LearnMore";
import WhyChooseUs from "../WhyChooseUs";
import FAQs from "../FAQs";

const HomeComp = () => {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <HerbsMeetIntimacy />
      <section className="bg-[rgba(239,246,246,1)] px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] mt-[15rem] flex flex-col pb-[12rem] ">
        <LearnMore />
        <WhyChooseUs />
      </section>
      <FAQs />
    </main>
  );
};

export default HomeComp;
