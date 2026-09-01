"use client";
import { Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";

interface WhyDevelopWithUsProps {
  title: string;
  subTitle: string;
  description: string;

  link: {
    label: string;
    href: string;
  };

  cards: string[];
}

const WhyDevelopWithUs = ({
  title,
  subTitle,
  description,
  link,
  cards,
}: WhyDevelopWithUsProps) => {
  return (
    <Section defaultPadding={false}>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-5 col-span-1 bg-secondary text-white p-8  flex flex-col gap-8 items-start justify-center relative">
          <div className="space-y-3">
            <h1 className="uppercase tracking-widest">{title}</h1>
            <h2 className="md:text-5xl text-white text-2xl font-anton tracking-wider">
              {subTitle}
            </h2>
          </div>

          <p className="text-base/[1.8rem] tracking-wider">{description}</p>

          <Link href={link.href} className="">
            {link.label}
          </Link>

          <div className="absolute bottom-1 right-2">
            <div className="relative w-40 aspect-[4/3.38]">
              <Image
                src={"/dwu/Asset.png"}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 col-span-1 develop-card">
          <SwiperCarousel
            autoplay={{
              delay: 5000,
            }}
            navigation
            loop
            modules={[Autoplay, Navigation]}
            data={cards}
            renderSlide={(src) => (
              <div className="relative w-full aspect-[4/2.5]">
                <Image src={src} alt={`${src}`} fill className="object-cover" />
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default WhyDevelopWithUs;
