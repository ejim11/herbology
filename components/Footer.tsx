import React, { ReactNode } from "react";
import logo from "../assets/logo-light.svg";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";
import { FooterLinkData, footerLinksData } from "@/data/footerLinkData";

const Footer = () => {
  const iconClassname = "w-[1.6rem] h-[1.6rem] text-[rgba(61,90,92,1)]";

  const mediaLinksData: { icon: ReactNode; link: string }[] = [
    {
      icon: <AiOutlineInstagram className={iconClassname} />,
      link: "https://www.instagram.com",
    },
    {
      icon: <FaXTwitter className={iconClassname} />,
      link: "https://www.x.com",
    },
    {
      icon: <FiFacebook className={iconClassname} />,
      link: "https://www.facebook.com",
    },
  ];

  return (
    <footer className="bg-[rgba(11,26,27,1)] px-[8rem] max-xl:px-[5rem] max-lg:px-[3rem] max-md:px-[2rem] max-lg:pt-[5rem] pt-[8rem]">
      <div className="flex justify-between max-md:flex-col">
        <div>
          <div className="w-[26rem]">
            <Image
              src={logo}
              alt="logo image"
              priority
              width={200}
              height={100}
              className="w-full h-full"
            />
          </div>
          <p className="text-[rgba(216,218,219,1)] text-[1.4rem] font-roboto tracking-[4%] leading-[100%] mt-[1.6rem]">
            Hand Made herbal Wellness
          </p>
          <div className="mt-[3.2rem] flex">
            {mediaLinksData.map((item: { icon: ReactNode; link: string }) => (
              <Link
                href={item.link}
                key={item.link}
                className="bg-white w-[2.8rem] h-[2.8rem] rounded-full flex items-center justify-center mr-[1rem] last:mr-0"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-x-[12rem] max-xl:gap-x-[8rem] max-xmd:gap-x-[4rem] max-ssm:gap-x-[2rem]  text-white w-[55%] max-2xl:w-[65%] max-xmd:flex-1 max-md:w-full max-xmd:ml-[2rem] max-md:ml-0 max-md:mt-[3rem] font-roboto  ">
          {footerLinksData.map((link: FooterLinkData) => (
            <div key={link.title} className="flex-1">
              <p className="leading-[100%] text-[1.8rem]  mb-[3.2rem]">
                {link.title}
              </p>
              {link.texts && (
                <div className="mb-[1rem]">
                  {link.texts.map((text: string) => (
                    <p
                      key={text}
                      className="text-[1.4rem] leading-[1.6rem] mb-[1.8rem] last:mb-0 text-wrap"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              )}
              {link.links && (
                <div className="flex flex-col">
                  {link.links.map((link: { link: string; text: string }) => (
                    <Link
                      href={link.link}
                      key={link.text}
                      className="text-[1.4rem] leading-[100%] mb-[1.8rem] last:mb-0 block capitalize hover:text-green-300 transition-all duration-150 ease-in"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-[3rem] border-t border-t-secondary-1 mt-[7rem] justify-between font-roboto text-[1.4rem] text-white leading-[100%] flex items-center max-ssm:flex-col ">
        <p className="max-ssm:mb-[2rem]">Copyright @ 2025, Herbology</p>
        <p>Designed &Developed by Qrest Company</p>
      </div>
    </footer>
  );
};

export default Footer;
