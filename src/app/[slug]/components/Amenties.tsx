"use client";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { SectionHeading } from "@/components/typography";
import React, { JSX } from "react";
import { Autoplay } from "swiper/modules";
interface AmentiesProps {
  amenties: {
    label: string;
    icon: JSX.Element;
  }[];
}

const Amenties = ({ amenties }: AmentiesProps) => {
  return (
    <Section>
      <Container className="pb-16">
        <SectionHeading title="HOTEL" subTitle="AMENITIES" textCenter />

        <div className="md:flex flex-wrap justify-center mt-12 gap-16 hidden">
          {amenties.map((amentie, index) => (
            <div key={index} className="flex flex-col items-center gap-2 max-w-[250px] w-full">
              {amentie.icon}
              <span className="uppercase">{amentie.label}</span>
            </div>
          ))}
        </div>

        <div className="md:hidden block mt-12">
          <SwiperCarousel
            data={amenties}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
            slidesPerView={2}
            renderSlide={(amentie, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                {amentie.icon}
                <span>{amentie.label}</span>
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Amenties;
