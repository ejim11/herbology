export type FooterLinkData = {
  title: string;
  texts?: string[];
  links?: { text: string; link: string }[];
};

export const footerLinksData: FooterLinkData[] = [
  {
    title: "Information",
    links: [
      {
        text: "Shipping policy",
        link: "/shipping-policy",
      },
      {
        text: "Returns & Refunds",
        link: "/",
      },
      {
        text: "Privacy Policy",
        link: "/privacy",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        text: "About us",
        link: "/about-us",
      },
      {
        text: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Contact",
    texts: ["123 Okpara Avenue, Off Bende Road, Umuahia, Abia State."],
    links: [
      {
        text: "08012345678",
        link: "tel:08012345678",
      },
      {
        text: "info@herbology.com",
        link: "mailto:info@herbology.com",
      },
    ],
  },
];
