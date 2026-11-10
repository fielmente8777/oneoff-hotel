import Whatsapp from "@/components/ContactButton/WhatsApp";
import FooterNew from "@/components/footer/FooterNew";
import NavBar from "@/components/navbars/NavBar";
import ImagePopup from "@/components/pop-up/ImagePopup";
import XperiencesPopUp from "@/components/pop-up/XperiencesPopUp";
import { WebContextProvider } from "@/contextApi/WebContext";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./style.scss";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "ONE-OFF Hotels | Design Forward Boutique Hotels in India",
  description:
    "Discover ONE-OFF Hotels—boutique luxury stays designed to be one of a kind, offering immersive cultural experiences across India.",

  keywords: [
    "one off hotels",
    "one-off hospitality",
    "boutique hotels india",
    "luxury boutique hotels",
    "experiential travel india",
  ],

  alternates: {
    canonical: "https://oneoffhotels.com/",
  },

  openGraph: {
    type: "website",
    title: "ONE-OFF Hotels | Design Forward Boutique Hotels in India",
    description:
      "Bespoke boutique hotels offering culturally rooted luxury stays and experiences across India.",
    url: "https://oneoffhotels.com/",
    siteName: "ONE-OFF Hotels",
    images: [
      {
        url: "https://oneoffhotels.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "ONE-OFF Hotels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ONE-OFF Hotels | Design Forward Boutique Hotels in India",
    description:
      "Explore ONE-OFF Hotels—design-led boutique stays inspired by culture and place.",
    images: ["https://oneoffhotels.com/og-home.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://oneoffhotels.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="p:domain_verify"
          content="143ac45682ac63ebaf178364749edffc"
        />
      </head>
      <body
        className={`${anton.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <WebContextProvider>
          <NavBar />
          {children}
          <FooterNew />
          <Whatsapp />
          <XperiencesPopUp />
          <ImagePopup />
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","zbn8a4qj2f");`}
        </Script>
      </body>
    </html>
  );
}
