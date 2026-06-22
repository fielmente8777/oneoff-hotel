"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponents";
import { SectionHeading } from "@/components/typography";
import { useWebContext } from "@/contextApi/WebContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ExploreProps {
  card: {
    location: string;
    title: string;
    subTitle: string;
    description: string;
    links: {
      label: string;
      href: string;
    }[];
    images: string[];
  }[];
}

const Explore: React.FC<ExploreProps> = ({ card }) => {
  const { selectedLocation, setSelectedLocation } = useWebContext();

  const buttons = [...new Set(card.map((item) => item.location))];
  const activeButton = selectedLocation || buttons[0];

  const selectedCard = card.find((item) => item.location === activeButton);

  const images = selectedCard?.images ?? [];

  const columnSizes = [2, 3, 2];
  const chunkedImages: string[][] = [];

  let start = 0;
  let i = 0;

  while (start < images.length) {
    const size = columnSizes[i % columnSizes.length];
    chunkedImages.push(images.slice(start, start + size));
    start += size;
    i++;
  }

  const getAspectRatio = (globalIndex: number): string => {
    const pattern = [
      "aspect-[4/5.5]",
      "aspect-[4/3]",
      "aspect-[4/2]",
      "aspect-[4/2]",
      "aspect-[4/3.7]",
      "aspect-[4/2.5]",
      "aspect-[4/2.9]",
    ];

    return pattern[globalIndex % pattern.length];
  };

  if (!selectedCard) return null;

  return (
    <SectionWithContainer>
      <div className="flex overflow-x-scroll hide-scroll gap-4 mb-8">
        {buttons.map((item) => (
          <button
            key={item}
            className={`border text-nowrap px-5 py-3 active:scale-95 flex items-center justify-between gap-6 transition-all duration-300 ease-in-out ${
              item === activeButton
                ? "bg-secondary text-white"
                : "text-secondary hover:bg-secondary hover:text-white"
            }`}
            onClick={() => setSelectedLocation(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 items-center">
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {chunkedImages.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((image, index) => {
                  const globalIndex = colIndex * 3 + index;

                  return (
                    <div
                      key={index}
                      className={`relative w-full ${getAspectRatio(
                        globalIndex
                      )}`}
                    >
                      <Image
                        src={image}
                        alt={"gallery-image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8">
            <SectionHeading
              title={selectedCard.title}
              subTitle={selectedCard.subTitle}
            />

            <p className="md:text-lg">{selectedCard.description}</p>

            {selectedCard.links[0] && (
              <Link
                href={selectedCard.links[0].href}
                className="w-fit md:text-lg"
              >
                {selectedCard.links[0].label}
              </Link>
            )}

            {selectedCard.links[1] && (
              <LinkButton
                href={selectedCard.links[1].href}
                label={selectedCard.links[1].label}
                variant="primary"
                className="max-lg:!w-[90%] max-lg:!h-12"
              />
            )}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Explore;
