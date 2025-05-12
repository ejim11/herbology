import { HerbItemType } from "@/types/herbItem";
import React, { FC } from "react";
import Hero from "./Hero";
import DescriptionAndRecommendation from "./DescriptionAndRecommendation";
import TreatmentsCollection from "../TreatmentsCollection";
import WhyChooseUs from "../WhyChooseUs";
import FAQs from "../FAQs";

const HerbDetailsComp: FC<{ herb: HerbItemType }> = ({ herb }) => {
  return (
    <main>
      <Hero herb={herb} />
      <DescriptionAndRecommendation herb={herb} />
      <TreatmentsCollection />
      <section className="px-[8rem] max-xl:px-[5rem] max-xl:py-[8rem] max-lg:px-[3rem] max-md:px-[2rem] max-lg:py-[3rem] py-[12rem] bg-[rgba(245,247,251,1)]">
        <WhyChooseUs />
      </section>
      <FAQs />
    </main>
  );
};

export default HerbDetailsComp;
