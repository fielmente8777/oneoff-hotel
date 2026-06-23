"use client";

import { BoatToursProps } from "@/@types/type";
import { ArrowUpRight } from "@/components/navbars/NavBar";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { useWebContext } from "@/contextApi/WebContext";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/Icons";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const BoatTours: React.FC<BoatToursProps> = ({ cards }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const {
    selectedLocation,
    setSelectedLocation,
    setIsXperiencePopUpOpen,
    setPopUpData,
  } = useWebContext();

  const makeId = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  /**
   * First find card from hash
   * and set location automatically
   */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const matchedCard = cards.find((card) => makeId(card.title) === hash);

    if (matchedCard) {
      setSelectedLocation(matchedCard.location);
    }
  }, [cards, setSelectedLocation]);

  /**
   * Filter cards using location
   */

  const filteredCards = selectedLocation
    ? cards.filter((card) => card.location === selectedLocation)
    : cards;

  /**
   * Move swiper to hash card
   */

  useEffect(() => {
    if (!swiperRef.current) return;

    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const index = filteredCards.findIndex(
      (card) => makeId(card.title) === hash
    );

    if (index !== -1) {
      swiperRef.current.slideToLoop(index, 0);
    }
  }, [filteredCards]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handleClick = (card: BoatToursProps["cards"][0]) => {
    setIsXperiencePopUpOpen(true);
    setPopUpData(card);
  };

  return (
    <Section className="experience">
      <Container className="w-full relative">
        <SwiperCarousel
          className="w-full"
          data={filteredCards}
          slidesPerView={1}
          spaceBetween={20}
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Navigation, Pagination, EffectFade]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          pagination={pagination}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          renderSlide={(card) => (
            <div
              id={makeId(card.title)}
              className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-14"
            >
              <div className="flex flex-col gap-6">
                <h2 className="md:text-5xl/tight text-2xl font-anton tracking-wider uppercase">
                  {card.title}
                </h2>
                {card.src && (
                  <div className="relative w-full md:hidden aspect-[4/3.5]">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {card.description && <p>{card.description}</p>}

                {card?.descriptionlist?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <button
                  onClick={() => handleClick(card)}
                  className="text-secondary flex items-center gap-1 underline md:mt-12"
                >
                  KNOW MORE
                  <ArrowUpRight />
                </button>
              </div>

              {card.src && (
                <div className="relative md:block hidden w-full aspect-[4/3.5]">
                  <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          )}
        />

        <div className="absolute z-10 bottom-2 md:bottom-10 left-[40%] flex items-center gap-4">
          <button className="button-prev w-10 aspect-square rounded-full bg-white flex items-center justify-center">
            <BtnPrevIcon />
          </button>

          <button className="button-next w-10 aspect-square rounded-full bg-white flex items-center justify-center">
            <BtnNextIcon />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default BoatTours;
