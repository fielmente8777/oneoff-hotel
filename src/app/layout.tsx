import type { Metadata } from "next";
import "./globals.css";
import "./style.scss";
import { Anton } from "next/font/google";
import { WebContextProvider } from "@/contextApi/WebContext";
import NavBar from "@/components/navbars/NavBar";
import Footer from "@/components/footer/Footer";
import XperiencesPopUp from "@/components/pop-up/XperiencesPopUp";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";

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
          <Whatsapp src="https://wa.me/message/OGSNGP4SG3LDE1" />
          <XperiencesPopUp />
        </WebContextProvider>

        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "ecb52f46-ee8b-4b1a-a2b4-05cfaafa6c54",
              hid: "77433588",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
