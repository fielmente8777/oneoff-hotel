"use client";
import { NewRoomsProps } from "@/@types/type";
import { Container } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ZoomIcon } from "@/utils/Icons";
import { useWebContext } from "@/contextApi/WebContext";
const FilteredRooms: React.FC<{ rooms: NewRoomsProps["rooms"] }> = ({
  rooms,
}) => {
  const { openGallery } = useWebContext();
  const allButtons = [...new Set(rooms.map((room) => room.alt))];
  const [selectedButton, setSelectedButton] = useState<string>(allButtons[0]);

  const filteredRooms = rooms.filter((room) => room.alt === selectedButton);

  return (
    <div className="space-y-8">
      <Container>
        <ul className="flex items-center gap-4 max-lg:overflow-x-auto ">
          {allButtons.map((button) => (
            <li className="" key={button}>
              <button
                className={` text-nowrap border border-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-primary ${
                  selectedButton === button
                    ? "bg-white"
                    : "bg-transparent text-white"
                }`}
                onClick={() => setSelectedButton(button)}
              >
                {button}
              </button>
            </li>
          ))}
        </ul>
      </Container>
      <div className="relative">
        <SwiperCarousel
          data={filteredRooms}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          slidesPerView={1}
          spaceBetween={26}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".new-room-next",
            prevEl: ".new-room-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          renderSlide={(room) => (
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={room.src}
                alt={room.alt}
                fill
                sizes="(max-width: 400px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          )}
        />
        <button
          onClick={() =>
            openGallery({
              images: filteredRooms.map((room) => room.src),
              index: 0,
            })
          }
          className="absolute z-10 bottom-4 right-4 p-2  rounded-lg gap-2 flex items-center justify-center"
        >
          <ZoomIcon />
          <span className="sr-only">Gallery</span>
        </button>
        <div className="absolute max-lg:inset-x-0 max-w-[52rem] w-full text-secondary z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between">
          <button className="new-room-prev w-12 aspect-square rounded-full bg-white flex items-center justify-center">
            <span className="sr-only">previous</span>
            <GrPrevious />
          </button>
          <button className="new-room-next w-12 aspect-square rounded-full bg-white flex items-center justify-center">
            <span className="sr-only">next</span>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilteredRooms;
