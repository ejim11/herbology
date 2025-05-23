import { HerbItemType } from "@/types/herbItem";
import React from "react";
import HerbItem from "./HerbItem";

const HerbList = ({ herbs }: { herbs: HerbItemType[] }) => {
  return (
    <section className="grid grid-cols-3 max-xmd:grid-cols-2 max-sm:grid-cols-1 gap-x-[2rem] gap-y-[3.2rem] w-full">
      {herbs.map((herb: HerbItemType) => (
        <HerbItem
          image={herb.image}
          name={herb.name}
          title={herb.title}
          price={
            herb.price
              ? herb.price
              : herb.volumesPrices
              ? herb.volumesPrices[0].price
              : 0
          }
          slug={herb.slug}
          key={herb.name}
        />
      ))}
    </section>
  );
};

export default HerbList;
