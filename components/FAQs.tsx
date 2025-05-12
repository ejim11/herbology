"use client";
import React, { useState } from "react";
import AccordionItem from "./Accordion";

const FAQs = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false);

  const faqs: { title: string; text: string }[] = [
    {
      title: "How do I use FLUXH360 Anti-Infection Syrup?",
      text: "Take the recommended dosage of FLUXH360 Anti-Infection Syrup as indicated on the bottle, typically 1-2 tablespoons daily. For best results, combine with FLUXH360 Anti-Infection Capsules and consult a healthcare provider.",
    },
    {
      title: "Are your herbal products safe for everyone?",
      text: "Our products, like RESTORE Women’s Contraceptive Tea and INTIMED Syrups, are made with natural ingredients but may not be suitable for pregnant women, nursing mothers, or those with specific allergies. Always consult a doctor before use.",
    },
    {
      title: "What payment methods do you accept?",
      text: "We accept Paystack for secure payments, including major credit/debit cards and bank transfers. All transactions are processed safely in NGN.",
    },
    {
      title: "How long does shipping take for herbal products?",
      text: "Standard shipping within Nigeria takes 3-7 business days. International shipping varies by location, typically 7-14 business days. Express options are available at checkout.",
    },
    {
      title: "Can I return or exchange a product?",
      text: "We offer a 14-day return policy for unopened and unused herbal products in their original packaging. Contact our support team to initiate a return or exchange.",
    },
    {
      title: "What are the benefits of RESTORE Probiotics Gummies?",
      text: "RESTORE Advanced Probiotics Gummies support gut health, boost immunity, prevent vaginal infections, and enhance fertility. Each serving contains 50 billion CFUs for optimal results.",
    },
    {
      title: "Can I combine multiple products for better results?",
      text: "Yes, for enhanced effectiveness, we recommend combining products like FLUXH360 Anti-Infection Syrup with Anti-Infection Capsules or RESTORE Yoni Oil with Luxury Intimate Scrub, as noted in product recommendations.",
    },
    {
      title: "How do I place an order for INTIMED Action Man Syrup?",
      text: "Browse our website, select INTIMED Premium ACTION MAN Syrup, choose your quantity, and click 'Add to Cart.' Proceed to checkout, enter your details, and complete payment via Paystack.",
    },
    {
      title: "Do your products have side effects?",
      text: "Our herbal products, such as FLUXH360 Detox & Hormonal Tea, are crafted with natural ingredients and are generally safe. However, mild reactions may occur in rare cases. Discontinue use and consult a doctor if adverse effects occur.",
    },
    {
      title: "Can I modify or cancel my order after placing it?",
      text: "You can modify or cancel your order within 4 hours of placement by contacting our customer support team. After this period, orders enter processing and cannot be changed.",
    },
  ];

  return (
    <section className="items-center flex flex-col px-[8rem] py-[12rem]">
      <h3 className="font-cambon text-[4.8rem] font-medium leading-[6.4rem] -tracking-[0.2rem]">
        FAQs
      </h3>
      <div className="w-[70%] mt-[6rem]">
        {faqs.map((faq: { title: string; text: string }, index: number) => (
          <AccordionItem
            key={faq.title}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            title={faq.title}
          >
            <p className="pt-[1.5rem] text-[1.4rem] text-[rgba(123,132,135,1)]">
              {faq.text}
            </p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
