import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "@styles/global.scss";
import Header from "@/components/common/Header";

const lato = Lato({
  variable: "--font-lato",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AceSpace",
  description: "Book your court now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
