import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herbology | Checkout",
  description: "Empowering Intimacy, Naturally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
