import { StaticImageData } from "next/image";
import { HerbCat } from "./herb-cat.eum";

export type VolumePriceType = {
  volume: string;
  price: number;
};

export type HerbItemType = {
  image: StaticImageData;
  title: string;
  name: string;
  category: HerbCat;
  description: string;
  fullDescription: string[];
  volumesPrices?: VolumePriceType[];
  price?: number;
  textList?: {
    title?: string;
    list: string[];
  };
  recommendation?: string[];
  slug: string;
};
