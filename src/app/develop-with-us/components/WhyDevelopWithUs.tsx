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
    <Section>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="lg:col-span-5 col-span-1 bg-secondary text-white p-5  flex flex-col gap-8 items-start justify-center">
          <div className="space-y-3">
            <h1 className="uppercase tracking-widest">{title}</h1>
            <h2 className="uppercase md:text-5xl text-3xl font-semibold">
              {subTitle}
            </h2>
          </div>

          <p className="text-base/[1.8rem] tracking-wider">{description}</p>

          <Link href={link.href} className="">
            {link.label}
          </Link>
        </div>

        <div className="lg:col-span-7 col-span-1 develop-card">
          <SwiperCarousel
            autoplay={{
              delay: 5000,
            }}
            navigation
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
