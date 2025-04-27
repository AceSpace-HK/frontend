import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@styles/global.scss";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";

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
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
