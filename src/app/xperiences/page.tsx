import React from "react";
import BoatTours from "./components/BoatTours";
import { ExperiencePageData } from "./experiencePageData";
import Banner from "@/components/banners/Banner";
import Explore from "./components/Explore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Varanasi Experiences | Boat Tours, Spiritual Yatras & City Tours – ONE-OFF Hotels",
  description:
    "Explore Varanasi with curated experiences by ONE-OFF Hotels including boat tours, walking tours, spiritual yatras, and city explorations.",

  keywords: [
    "varanasi experiences",
    "boat tours varanasi",
    "spiritual yatra varanasi",
    "walking tours varanasi",
    "cultural experiences kashi",
  ],

  alternates: {
    canonical: "https://oneoffhotels.com/xperiences/",
  },

  openGraph: {
    type: "website",
    title:
      "Varanasi Experiences | Boat Tours, Spiritual Yatras & City Tours – ONE-OFF Hotels",
    description:
      "Curated cultural and spiritual experiences in Varanasi by ONE-OFF Hotels.",
    url: "https://oneoffhotels.com/xperiences/",
    siteName: "ONE-OFF Hotels",
    images: [
      {
        url: "https://oneoffhotels.com/og-xperiences.jpg",
        width: 1200,
        height: 630,
        alt: "ONE-OFF Hotels Experiences",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Varanasi Experiences | Boat Tours, Spiritual Yatras & City Tours – ONE-OFF Hotels",
    description:
      "Discover immersive cultural and spiritual experiences in Varanasi.",
    images: ["https://oneoffhotels.com/og-xperiences.jpg"],
  },
};


const page = () => {
  return (
    <div>
      <Banner {...ExperiencePageData.bannerData} />
      <Explore card={ExperiencePageData.experience} />
      <BoatTours cards={ExperiencePageData.tourData} />
    </div>
  );
};

export default page;
