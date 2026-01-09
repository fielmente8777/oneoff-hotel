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
    src: string;
  }[];
}

const UpcomingCafe = ({ title, subTitle, cards }: UpcomingCafeProps) => {
  const phoneViewCardsData = cards.slice(1);
  console.log(phoneViewCardsData);
  return (
    <Section className="pb-0!">
      <div>
        <div className="flex flex-col md:gap-14 gap-8">
          <SectionHeading title={title} subTitle={subTitle} textCenter />

          <div className="md:grid hidden grid-cols-3">
            {/* Left Column */}
            <div className="grid grid-rows-2">
              {cards.slice(0, 2).map((card, index) => (
                <div className="w-full h-full relative" key={index}>
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="w-full aspect-[4/5] relative">
              {cards.slice(2, 3).map((card, index) => (
                <Image
                  key={index}
                  src={card.src}
                  alt=""
                  fill
                  className="w-full h-full object-cover"
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="grid grid-rows-2">
              {cards.slice(3, 5).map((card, index) => (
                <div className="w-full h-full relative" key={index}>
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
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
