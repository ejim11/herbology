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
    // texts: ["123 Okpara Avenue, Off Bende Road, Umuahia, Abia State."],
    links: [
      {
        text: " 08141232749",
        link: "tel: 08141232749",
      },
      {
        text: "info@myherbology.net",
        link: "mailto:info@myherbology.net",
      },
    ],
  },
];
