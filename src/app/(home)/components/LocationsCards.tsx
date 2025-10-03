"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

interface LocationsCardsProps {
  locations: {
    title: string;
    subTitle: string;
    description: string;
    src: string;
    images: string[];
    link: {
      label: string;
      href: string;
    };
  }[];
}

const LocationsCards: React.FC<LocationsCardsProps> = ({ locations }) => {
  return (
    <Section>
      <div className="relative w-full">
        <SwiperCarousel
          data={locations}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            el: ".locations",
            renderBullet: (index, className) => {
              return `
                <div class="${className}" >
                  <svg class="progress-ring" width="48" height="48">
                    <circle class="progress-ring__circle" cx="24" cy="24" r="22"></circle>
                  </svg>
                  <span class="bullet-label">${index + 1}</span>
                </div>
              `;
            },
          }}
          swiperSlideClassName="w-full"
          autoplay={{ delay: 2500 }}
          effect={'fade'}
          fadeEffect={{
            // crossfade: true,
            crossFade: true,
          }}
          // speed={1000}
          className="w-full"
          renderSlide={(location) => (
            <div className="relative w-full aspect-[4/1.95]">
              <Image
                src={location.images[0]}
                alt={location.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10">
                <Container>
                  <div className="grid grid-cols-5 items-center gap-5">
                    <div className="flex flex-col justify-between gap-8 w-full text-white md:col-span-2 h-full">
                      <h2 className="md:text-5xl text-2xl font-anton tracking-wider">
                        {location.title}
                      </h2>

                      <div className="">
                        <h3 className="md:text-4xl text-2xl">
                          {location.subTitle}
                        </h3>
                        <p className="md:text-lg">{location.description}</p>
                      </div>
                      <div className="w-full">
                        <LinkButton
                          href={location.link.href}
                          label={location.link.label}
                          variant="secondary"
                          className="!w-48 pointer-events-auto"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="relative w-full aspect-[4/2.5]">
                        <Image
                          src={location.images[1]}
                          alt={location.title}
                          fill
                          className="object-cover rounded-4xl box-shadow"
                        />
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          )}
        />
        <div className="locations" />
      </div>
    </Section>
  );
};

export default LocationsCards;
