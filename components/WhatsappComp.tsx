"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappComp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={"+2349131212512"}
      accountName={"Herbology"}
      avatar="https://nich-fashion.s3.us-east-2.amazonaws.com/alex-starnes-PK_t0Lrh7MM-unsplash.jpg"
    />
  );
};

export default WhatsappComp;
