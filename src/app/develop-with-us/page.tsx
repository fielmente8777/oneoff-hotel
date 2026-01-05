"use client";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { DevelopBanner } from "./components/DevelopBanner";
import DevelopWithUsComponent from "./components/DevelopWithUs";
import WhyDevelopWithUs from "./components/WhyDevelopWithUs";
import { DevelopWithUsPageData } from "./developWithUsData";
import { Autoplay } from "swiper/modules";

export default function DevelopWithUs() {
  return (
    <main>
      <DevelopBanner {...DevelopWithUsPageData.bannerData} />
      <Section className="pt-0!">
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
      </Section>

      <WhyDevelopWithUs {...DevelopWithUsPageData?.whyDevelopWithUs} />

      <DevelopWithUsComponent {...DevelopWithUsPageData.whyChooseUs} />
    </main>
  );
}
