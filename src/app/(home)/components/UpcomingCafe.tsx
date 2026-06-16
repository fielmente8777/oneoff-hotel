"use client";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";

interface UpcomingCafeProps {
  title: string;
  subTitle: string;
  cards: {
    cafe: {
      src: string;
    }[];
  }[];
}

const UpcomingCafe = ({ title, subTitle, cards }: UpcomingCafeProps) => {
  const phoneViewCardsData = [...cards.flatMap((item) => item.cafe)];
  return (
    <Section className="pb-0!">
      <div>
        <div className="flex flex-col md:gap-14 gap-8">
          <SectionHeading title={title} subTitle={subTitle} textCenter />

          {/* GridView */}
          <div className="md:block hidden">
            <SwiperCarousel
              data={cards}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay]}
              renderSlide={(item) => <GridView {...item} />}
            />
          </div>
        </div>

        <div className="mt-6 md:hidden block">
          <SwiperCarousel
            data={phoneViewCardsData}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
            renderSlide={(item) => (
              <div className="relative w-full aspect-square">
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default UpcomingCafe;

export const GridView = ({ cafe }: { cafe: { src: string }[] }) => {
  const gridPattern = [
    "row-span-2",
    "row-span-4",
    "row-span-2",
    "row-span-2",
    "row-span-2",
  ];
  return (
    <div className="grid grid-cols-3 grid-flow-row auto-rows-[11rem] gap-px">
      {cafe.map((item, index) => (
        <div
          key={index}
          className={`relative w-full h-full aspect-auto ${gridPattern[index]}`}
        >
          <Image
            src={item.src}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
