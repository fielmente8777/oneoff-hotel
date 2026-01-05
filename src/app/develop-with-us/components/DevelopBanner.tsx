import React from "react";
import { DevelopGrid } from "./DevelopGrid";

interface DevelopBannerProps {
  title: string;
  subTitle: string;
  images: string[];
}
export const DevelopBanner = ({
  title,
  subTitle,
  images,
}: DevelopBannerProps) => {
  return (
    <main>
      <div className="flex items-center justify-center min-h-72 develop-bg max_screen_width">
        <div>
          <h1 className="text-center ">{title}</h1>
          <h2 className="md:text-6xl text-3xl text-primary font-anton tracking-wider">
            {subTitle}
          </h2>
        </div>
      </div>

      {/* <DevelopGrid images={images} /> */}
    </main>
  );
};
