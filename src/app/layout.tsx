import type { Metadata } from "next";
import "./globals.css";
import "./style.scss";
import { Anton } from "next/font/google";
import { WebContextProvider } from "@/contextApi/WebContext";
import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/footer/Footer";
import XperiencesPopUp from "@/components/pop-up/XperiencesPopUp";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "One Off Hotels",
  description: "One Off Hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <WebContextProvider>
          <NavBar />
          {children}
          <Footer />
          <XperiencesPopUp/>
        </WebContextProvider>
      </body>
    </html>
  );
}
