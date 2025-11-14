import Gallery from "@/app/culture/components/Gallery";
import Image from "next/image";
import React from "react";

interface DevelopGridProps {
  images: string[];
}

export const DevelopGrid = ({ images }: DevelopGridProps) => {
  return (
    <div className="relative">
      {/* <div className="grid grid-cols-3 gap-0.5">
        {images.map((image) => (
          <div
            key={image}
            className="relative max-w-full w-full md:aspect-[4/4.5]"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ))} */}
      {/* </div> */}
      <Gallery images={images} />

      <div className="absolute z-20 right-4 -top-12 animate-bounce-slow">
        <Image
          src={"/Ten.png"}
          alt=""
          // fill
          className="object-contain"
          width={100}
          height={50}
        />
      </div>
    </div>
  );
};
