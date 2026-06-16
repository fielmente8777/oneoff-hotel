"use client";

import { useWebContext } from "@/contextApi/WebContext";
import Image from "next/image";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Autoplay } from "swiper/modules";
import LinkButton from "../buttons/LinkButton";
import { SwiperCarousel } from "../sliders";

const XperiencesPopUp = () => {
  const { isXperiencePopUpOpen, setIsXperiencePopUpOpen, popUpData } =
    useWebContext();
  useEffect(() => {
    if (isXperiencePopUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isXperiencePopUpOpen]);
  return (
    <section className={`pop-up ${isXperiencePopUpOpen ? "open" : "close"}`}>
      <div className="pop-up-content w-full  max-w-7xl mx-auto">
        {/* pop up content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 relative bg-img">
            <button
              className="absolute right-6 text-2xl text-white bg-[#9C533E] aspect-square rounded-full flex items-center justify-center"
              onClick={() => setIsXperiencePopUpOpen(false)}
              aria-label="Close"
            >
              <MdClose />
            </button>
            <h2 className=" uppercase lg:pr-8">{popUpData?.title} details</h2>
            <div className="max-h-[450px] overflow-y-auto space-y-6 pr-8">
              {popUpData?.popUpData?.map((item, index) => (
                <div className="space-y-2" key={index}>
                  <h3 className="md:text-2xl text-xl font-anton">
                    {item.title}
                  </h3>
                  {item?.desc && <p className="md:text-lg ">{item.desc}</p>}
                  {item?.desclist?.map((desc, index) => (
                    <p key={index} className="text-justify">
                      {desc}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="w-full h-[1px] bg-[#9C533E] my-1" />
            <LinkButton
              href={"/contact-us"}
              label={"contact us"}
              variant="primary"
              onClick={() => setIsXperiencePopUpOpen(false)}
              className="md:tracking-wider"
            />
          </div>
          {popUpData?.images && (
            <div className="">
              <SwiperCarousel
                data={popUpData?.images || []}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                speed={2000}
                loop={true}
                renderSlide={(src: string) => (
                  <div className="relative w-full md:aspect-[4/4]">
                    <Image
                      src={src}
                      alt={popUpData?.title}
                      className="object-cover"
                      fill
                    />
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default XperiencesPopUp;
