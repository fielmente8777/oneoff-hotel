"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponents";
import { SwiperCarousel } from "@/components/sliders";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { Autoplay, Pagination } from "swiper/modules";

interface LocationsCardsProps {
  locations: {
    title: string;
    location: string;
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
    <Section className="room-bg" >
      <div className="relative w-full location-bg">
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
          className="w-full "
          swiperSlideClassName="w-full"
          autoplay={{ delay: 2500 }}
          effect={"fade"}
          fadeEffect={{
            // crossfade: true,
            crossFade: true,
          }}
          // speed={1000}
          renderSlide={(location) => (
            <div className="w-full">
              <Container className="">
                <div className="grid lg:grid-cols-6 items-center gap-5">
                  <div className="md:col-span-4 room-img1 flex flex-col h-full justify-between border-white">
                    <h2 className="md:text-5xl block lg:hidden text-white mb-4 text-2xl font-anton tracking-wider">
                      {location.title}
                    </h2>
                    <div className="relative w-full aspect-[4/2.5]">
                      <Image
                        src={location.images[1]}
                        alt={location.title}
                        fill
                        className="object-cover lg:rounded-4xl rounded-3xl border-[3px] border-white box-shadow"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full text-white md:col-span-2 h-full">
                    <h2 className="md:text-5xl lg:block hidden text-2xl font-anton tracking-wider">
                      {location.title}
                    </h2>

                    <div className="lg:block hidden space-y-4">
                      {location.location && (
                        <p className="md:text-lg flex items-center gap-2 text-white">
                          <span className="text-lg">
                            <IoLocationSharp />
                          </span>
                          {location.location}
                        </p>
                      )}
                      <h3 className="md:text-4xl text-2xl font-anton tracking-wider">
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
                </div>
              </Container>
              <div className="lg:hidden px-4 mt-4 flex flex-col gap-4">
                {location.location && (
                  <p className="md:text-lg flex items-center gap-2 text-white">
                    <span className="text-lg">
                      <IoLocationSharp />
                    </span>
                    {location.location}
                  </p>
                )}
                <h3 className="md:text-4xl font-anton tracking-wider text-2xl text-white">
                  {location.subTitle}
                </h3>
                {/* <p className="md:text-lg">{location.description}</p> */}
              </div>
              <div className="lg:hidden px-4 mt-4 flex flex-col">
                <p className=" text-white">{location.description}</p>
                <LinkButton
                  href={location.link.href}
                  label={location.link.label}
                  variant="secondary"
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
