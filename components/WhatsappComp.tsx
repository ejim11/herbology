"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappComp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber={"+2349131212512"}
      accountName={"Herbology"}
    />
  );
};

export default WhatsappComp;
