import { StaticImageData } from "next/image";
import value1Img from "../assets/about-us/value-1.png";
import value2Img from "../assets/about-us/value-2.png";
import value3Img from "../assets/about-us/value-3.png";

export const valuesData: {
  title: string;
  text: string;
  image: StaticImageData;
}[] = [
  {
    title: "Nature-First Healing",
    text: "Our formulas are crafted using powerful herbs traditionally used to support the body’s natural defenses and intimate vitality.",
    image: value1Img,
  },
  {
    title: "Focused Care",
    text: "We specialize in herbal solutions for STIs, reproductive health, and libido, offering you a discreet and supportive wellness experience.",
    image: value2Img,
  },
  {
    title: "Transparency & Trust",
    text: "Every product is backed by research, tradition, and integrity. We keep our formulas clean, honest, and chemical-free.",
    image: value3Img,
  },
];
