import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppContextProvider from "@/store/appContextProvider";

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
        </AppContextProvider>
      </body>
    </html>
  );
}
