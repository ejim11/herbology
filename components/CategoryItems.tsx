import React from "react";
import HerbList from "./HerbList";
import { HerbItemType } from "@/types/herbItem";
import { herbs } from "@/data/herbs";

const CategoryItems = ({ herb }: { herb: HerbItemType }) => {
  const filteredHerbs = herbs
    .filter((herbItem: HerbItemType) => herbItem.category === herb.category)
    .slice(0, 3);

  return (
    <section className="px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] py-[7.2rem] bg-white">
      <h3 className="font-cambon text-[4.8rem] max-smd:text-[3rem]  leading-[100%] -tracking-[0.3rem] font-medium text-secondary-2 mb-[4rem] text-center capitalize">
        The {herb.category} Category
      </h3>
      <HerbList herbs={filteredHerbs} />
    </section>
  );
};

export default CategoryItems;
