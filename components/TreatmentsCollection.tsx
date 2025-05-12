import React from "react";
import HerbList from "./HerbList";
import { treatmentsCollection } from "@/data/treatmentsCollectionData";

const TreatmentsCollection = () => {
  return (
    <section className="px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] py-[7.2rem] bg-white">
      <h3 className="font-cambon text-[4.8rem] max-smd:text-[3rem]  leading-[100%] -tracking-[0.3rem] font-medium text-secondary-2 mb-[4rem] text-center">
        The Treatments Collection
      </h3>
      <HerbList herbs={treatmentsCollection} />
    </section>
  );
};

export default TreatmentsCollection;
