import Banner from "@/components/banners/Banner";
import { aboutPageData } from "./aboutPageData";
import StayAt from "./components/StayAt";
import Gallery from "./components/Gallery";
import HomeAbout from "../(home)/components/HomeAbout";
import JoinsUsAt from "./components/JoinsUsAt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ONE-OFF Hotels Culture | One-of-a-Kind Stays Inspired by Place & Purpose",
  description:
    "Discover the culture behind ONE-OFF Hotels—design-led boutique stays inspired by individuality, sustainability, and the Wabi-Sabi philosophy.",

  keywords: [
    "one off hotels culture",
    "boutique hotel culture",
    "experiential hospitality india",
    "wabi sabi hotels",
    "sustainable boutique hotels",
  ],

  alternates: {
    canonical: "https://oneoffhotels.com/culture/",
  },

  openGraph: {
    type: "website",
    title:
      "ONE-OFF Hotels Culture | One-of-a-Kind Stays Inspired by Place & Purpose",
    description:
      "Explore the philosophy and culture behind ONE-OFF Hotels’ unique boutique hospitality.",
    url: "https://oneoffhotels.com/culture/",
    siteName: "ONE-OFF Hotels",
    images: [
      {
        url: "https://oneoffhotels.com/og-culture.jpg",
        width: 1200,
        height: 630,
        alt: "ONE-OFF Hotels Culture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ONE-OFF Hotels Culture | One-of-a-Kind Stays Inspired by Place & Purpose",
    description:
      "Discover the culture, philosophy, and design principles behind ONE-OFF Hotels.",
    images: ["https://oneoffhotels.com/og-culture.jpg"],
  },
};


export default function AboutUs() {
  return (
    <main>
      <Banner {...aboutPageData.bannerData} />
      <HomeAbout
        {...aboutPageData.aboutStayPage}
        wrapperClassName="max-w-3xl"
      />
      <Gallery images={aboutPageData.images} />
      <StayAt {...aboutPageData.stayAt} />
      <JoinsUsAt {...aboutPageData.joinUsAt} />
    </main>
  );
}
