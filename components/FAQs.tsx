"use client";
import React, { useState } from "react";
import AccordionItem from "./Accordion";

const FAQs = () => {
  const [expanded, setExpanded] = useState<boolean | number>(false);

  const faqs: { title: string; text: string }[] = [
    {
      title: "How do I place an order?",
      text: `Simply browse our collection, select your preferred hoodie, choose the size and color, and click "Add to Cart." Proceed to checkout and complete your payment.`,
    },
    {
      title: "What payment methods do you accept?",
      text: "We accept all major credit/debit cards, PayPal, bank transfers, and digital wallets like Apple Pay and Google Pay.",
    },
    {
      title: "Can I modify or cancel my order after placing it?",
      text: "Yes, you can modify or cancel your order within 24 hours of placing it by contacting our customer service team - after that window, changes may be limited once processing has begun.",
    },
    {
      title: "What is your return policy?",
      text: "We offer a hassle-free 30-day return policy on all unworn items with original tags attached and in their original packaging.",
    },
    {
      title: "How long does shipping take?",
      text: "Standard shipping takes 3-5 business days within the US, while express shipping delivers within 1-2 business days - international shipping varies by location.",
    },
    {
      title: "Can I modify or cancel my order?",
      text: "Orders can be modified or cancelled within 2 hours of placement by contacting our customer service team - after that, the order enters processing and cannot be changed.",
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
