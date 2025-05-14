import { HerbItemType } from "@/types/herbItem";
import React, { FC } from "react";
import Hero from "./Hero";
import DescriptionAndRecommendation from "./DescriptionAndRecommendation";
import WhyChooseUs from "../WhyChooseUs";
import FAQs from "../FAQs";
import CategoryItems from "../CategoryItems";

const HerbDetailsComp: FC<{ herb: HerbItemType }> = ({ herb }) => {
  return (
    <main className="flex flex-col">
      <Hero herb={herb} />
      <DescriptionAndRecommendation herb={herb} />
      <CategoryItems herb={herb} />
      <section className="px-[8rem] max-xl:px-[5rem] max-xl:py-[8rem] max-lg:px-[3rem] max-md:px-[2rem] max-lg:py-[3rem] py-[12rem] bg-[rgba(245,247,251,1)]">
        <WhyChooseUs />
      </section>
      <FAQs />
    </main>
  );
};

export default HerbDetailsComp;
