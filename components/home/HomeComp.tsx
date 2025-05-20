import React from "react";
import Hero from "./Hero";
import LearnMore from "./LearnMore";
import WhyChooseUs from "../WhyChooseUs";
import FAQs from "../FAQs";
import ProductsSlides from "../ProductsSlides";
import { herbs } from "@/data/herbs";
import { HerbItemType } from "@/types/herbItem";
import { HerbCat } from "@/types/herb-cat.eum";

const HomeComp = () => {
  const treatments = herbs.filter(
    (herb: HerbItemType) => herb.category === HerbCat.TREATMENT
  );

  const aphrodisiacs = herbs.filter(
    (herb: HerbItemType) => herb.category === HerbCat.APHRODISIACS
  );

  const intimateCare = herbs.filter(
    (herb: HerbItemType) => herb.category === HerbCat.INTIMATECARE
  );

  return (
    <main className="w-full flex flex-col">
      <Hero />
      <ProductsSlides
        header={"Explore Herbal Treatments"}
        subHeader={"Discover natural remedies to support your body’s healing"}
        products={treatments}
      />
      <ProductsSlides
        header={"Enhance Intimacy with Aphrodisiacs"}
        subHeader={
          "Ignite passion and connection with powerful plant-based boosters"
        }
        products={aphrodisiacs}
      />
      <ProductsSlides
        header={"Feel Confident with Intimate Care"}
        subHeader={
          "Clean, herbal solutions for comfort, balance, and daily freshness"
        }
        products={intimateCare}
      />
      <section className="bg-[rgba(239,246,246,1)] px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] mt-[25rem] max-ssm:mt-[6rem] flex flex-col pb-[12rem] max-ssm:pb-[6rem] ">
        <LearnMore />
        <WhyChooseUs />
      </section>
      <FAQs />
    </main>
  );
};

export default HomeComp;
