"use client";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import { BtnPrevIcon, BtnNextIcon } from "@/utils/Icons";
import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { ArrowUpRight } from "@/components/navbars/NavBar";
import { WebContext } from "@/contextApi/WebContext";
import { BoatToursProps } from "@/@types/type";



const BoatTours: React.FC<BoatToursProps> = ({ cards }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        (index + 1) +
        '<span class=""></span></span>'
      );
    },
  };

  // Utility: convert title to safe ID
  const makeId = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  // 🔥 On mount, check for hash and navigate Swiper
  useEffect(() => {
    if (typeof window !== "undefined" && swiperRef.current) {
      const hash = window.location.hash.replace("#", ""); // e.g. "sunset-cruise"
      if (hash) {
        const index = cards.findIndex((card) => makeId(card.title) === hash);
        if (index !== -1) {
          swiperRef.current.slideToLoop(index, 0); // slide instantly
        }
      }
    }
  }, [cards]);

  const {setIsXperiencePopUpOpen,setPopUpData} = useContext(WebContext);
  const handleClick = (card: BoatToursProps["cards"][0]) => {
    setIsXperiencePopUpOpen(true);
    setPopUpData(card);
    console.log("card" , card.title ,card.popUpData)
  }
  return (
    <Section className="experience">
      <Container className="w-full relative">
        <SwiperCarousel
          className="w-full"
          data={cards || []}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          pagination={pagination}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // store instance
          renderSlide={(card) => (
            <div
              id={makeId(card.title)} // 👈 title as DOM id
              className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-14"
            >
              <div className="flex flex-col gap-6">
                <h2 className="md:text-5xl text-2xl font-anton tracking-wider">
                  {card.title}
                </h2>
                <p className="text-justify">{card.description}</p>
                <button onClick={() => handleClick(card)} className="text-secondary flex items-center gap-1 w-fit mt-24 underline underline-offset-1">
                  KNOW MORE <ArrowUpRight />
                </button>
              </div>
              {card.src && (
                <div className="relative w-full aspect-[4/3.5]">
                  <Image
                    src={card.src}
                    alt={card.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>
              )}
            </div>
          )}
        />
        <div className="absolute z-10 bottom-6 left-[40%] flex items-center gap-4">
          <button className="button-prev w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
            <BtnPrevIcon />
          </button>
          <button className="button-next w-10 box-shadow aspect-square bg-white rounded-full flex items-center justify-center">
            <BtnNextIcon />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default BoatTours;
