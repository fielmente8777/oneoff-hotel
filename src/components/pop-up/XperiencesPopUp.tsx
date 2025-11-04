"use client";

import { WebContext } from "@/contextApi/WebContext";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";
import LinkButton from "../buttons/LinkButton";

const XperiencesPopUp = () => {
  const { isXperiencePopUpOpen, setIsXperiencePopUpOpen, popUpData } =
    useContext(WebContext);
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
            <h2 className="text-lg uppercase">{popUpData?.title} details</h2>
            <div className="max-h-[450px] overflow-y-auto space-y-6 pr-8">
              {popUpData?.popUpData?.map((item, index) => (
                <div className="space-y-2" key={index}>
                  <h3 className="md:text-2xl text-xl font-anton">
                    {item.title}
                  </h3>
                  <p className="md:text-lg ">{item.desc}</p>
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
          {popUpData?.src && (
            <div className="relative w-full md:aspect-[4/4]">
              <Image
                src={popUpData?.src}
                alt={popUpData?.title}
                className="object-cover"
                fill
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default XperiencesPopUp;
