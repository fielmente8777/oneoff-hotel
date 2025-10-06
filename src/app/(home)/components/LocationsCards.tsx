"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

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
          effect={"fade"}
          fadeEffect={{
            // crossfade: true,
            crossFade: true,
          }}
          // speed={1000}
          className="w-full"
          renderSlide={(location) => (
            <div className="w-full">
              <div className="relative w-full lg:aspect-[4/1.95] aspect-[4/5.2]">
                <Image
                  src={location.images[0]}
                  alt={location.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
                <div className="absolute lg:top-1/2 top-8 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-full z-10">
                  <Container className="">
                    <div className="grid lg:grid-cols-5 items-center gap-5">
                      <div className="flex flex-col justify-between gap-8 w-full text-white md:col-span-2 h-full">
                        <h2 className="md:text-5xl text-2xl font-anton tracking-wider">
                          {location.title}
                        </h2>

                        <div className="lg:block hidden">
                          <h3 className="md:text-4xl text-2xl">
                            {location.subTitle}
                          </h3>
                          <p className="md:text-lg">{location.description}</p>
                        </div>
                        <div className="w-full lg:block hidden">
                          <LinkButton
                            href={location.link.href}
                            label={location.link.label}
                            variant="secondary"
                            className="!w-48 pointer-events-auto "
                          />
                        </div>
                      </div>
                      <div className="md:col-span-3 flex flex-col h-full justify-between border-white">
                        <div className="relative w-full aspect-[4/2.5]">
                          <Image
                            src={location.images[1]}
                            alt={location.title}
                            fill
                            className="object-cover lg:rounded-4xl rounded-3xl border-[3px] border-white box-shadow"
                          />
                        </div>
                      </div>
                    </div>
                  </Container>
                  <div className="lg:hidden px-4 mt-24">
                    <h3 className="md:text-4xl text-2xl text-white">
                      {location.subTitle}
                    </h3>
                    {/* <p className="md:text-lg">{location.description}</p> */}
                  </div>
                </div>
              </div>
              <div className="lg:hidden px-4 mt-4 flex flex-col">
                <p className="text-lg">{location.description}</p>
                <LinkButton
                  href={location.link.href}
                  label={location.link.label}
                  variant="primary"
                  className="!w-full !h-12 pointer-events-auto mt-4"
                />
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
