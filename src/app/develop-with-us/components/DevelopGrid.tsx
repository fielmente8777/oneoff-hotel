import Image from "next/image";
import React from "react";

interface DevelopGridProps {
  images: string[];
}

export const DevelopGrid = ({ images }: DevelopGridProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-0.5">
        {images.map((image) => (
          <div
            key={image}
            className="relative max-w-full w-full md:aspect-[4/4.5]"
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
