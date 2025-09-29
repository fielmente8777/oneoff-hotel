"use client";

import { Container } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import React from "react";

interface BoatToursProps {
  title: string;
  subTitle?: string;
  description?: string;
  images: { src: string }[];
}

const BoatTours = ({ title, description, images }: BoatToursProps) => {
  return (
    <div className="p-16">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <div className="space-y-6 max-w-96 mx-auto">
            <h2 className="md:text-5xl text-2xl font-anton tracking-wider">
              {title}
            </h2>
            <p className="text-justify">{description}</p>
          </div>

          <div>
            <SwiperCarousel
              data={images}
              renderSlide={(image) => (
                <div className="pl-2 border-l border-l-secondary">
                  <div className="relative aspect-[4/3.2]">
                    <Image
                      src={image.src}
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BoatTours;
