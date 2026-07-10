import Banner from "@/components/banners/Banner";
import { DevelopBanner } from "./components/DevelopBanner";
import DevelopWithUsComponent from "./components/DevelopWithUs";
import WhyDevelopWithUs from "./components/WhyDevelopWithUs";
import { DevelopWithUsPageData } from "./developWithUsData";
import type { Metadata } from "next";
import LifestyleSection from "./components/LifestyleSection";

export const metadata: Metadata = {
  title:
    "Develop With ONE-OFF Hotels | Boutique Hotel Development & Partnerships",
  description:
    "Partner with ONE-OFF Hotels to create design-led boutique hotels focused on individuality, culture, and operational excellence.",

  keywords: [
    "boutique hotel development india",
    "hotel brand partnerships",
    "hospitality development partners",
    "experiential hotel brand",
  ],

  alternates: {
    canonical: "https://oneoffhotels.com/develop-with-us/",
  },

  openGraph: {
    type: "website",
    title:
      "Develop With ONE-OFF Hotels | Boutique Hotel Development & Partnerships",
    description:
      "Collaborate with ONE-OFF Hotels to build culturally rooted boutique hotels.",
    url: "https://oneoffhotels.com/develop-with-us/",
    siteName: "ONE-OFF Hotels",
    images: [
      {
        url: "https://oneoffhotels.com/og-develop.jpg",
        width: 1200,
        height: 630,
        alt: "Develop With ONE-OFF Hotels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Develop With ONE-OFF Hotels | Boutique Hotel Development & Partnerships",
    description:
      "Partner with ONE-OFF Hotels for boutique hospitality development.",
    images: ["https://oneoffhotels.com/og-develop.jpg"],
  },
};

export default function DevelopWithUs() {
  return (
    <main>
      {/* <Banner images={DevelopWithUsPageData?.bannerData2?.images} /> */}
      <DevelopBanner {...DevelopWithUsPageData.bannerData} />
      {/* <Section className="pt-0!">
        <SwiperCarousel
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          data={DevelopWithUsPageData.bannerData2?.images}
          renderSlide={(src) => (
            <div className="w-full aspect-[4/2.3] relative">
              <Image src={src} alt="Image" className="object-cover" fill />
            </div>
          )}
        />

        <div className="max-w-2xl mx-auto md:mt-12 mt-6">
          <p className="text-center text-xl">
            {DevelopWithUsPageData?.bannerData2?.description}
          </p>
        </div>
      </Section> */}

      <WhyDevelopWithUs {...DevelopWithUsPageData?.whyDevelopWithUs} />
      <LifestyleSection {...DevelopWithUsPageData.lifestyleData} />
      <DevelopWithUsComponent {...DevelopWithUsPageData.whyChooseUs} />
    </main>
  );
}
