import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppContextProvider from "@/store/appContextProvider";
import WhatsappComp from "@/components/WhatsappComp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const cambonMediumItalic = localFont({
  src: "../public/fonts/cambon/Cambon-MediumItalic.ttf",
  display: "swap",
  variable: "--font-cambon",
});

const cambonLight = localFont({
  src: "../public/fonts/cambon/Cambon-Light.ttf",
  display: "swap",
  variable: "--font-cambon-l",
});

export const metadata: Metadata = {
  title: "Herbology",
  description: "Empowering Intimacy, Naturally",
  metadataBase: new URL("https://herbology.vercel.app/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  openGraph: {
    description: "Empowering Intimacy, Naturally",
    type: "website",
    url: "https://herbology.vercel.app/",
    images: [
      {
        url: "https://nich-fashion.s3.us-east-2.amazonaws.com/Screenshot+2025-05-12+at+16.28.12.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${cambonMediumItalic.variable} ${cambonLight.variable} antialiased`}
      >
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
          <WhatsappComp />
          <ToastContainer />
        </AppContextProvider>
      </body>
    </html>
  );
}
