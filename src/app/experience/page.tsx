import React from "react";
import BoatTours from "./components/BoatTours";
import { ExperiencePageData } from "./experiencePageData";
import Banner from "@/components/banners/Banner";
import Explore from "./components/Explore";

const page = () => {
  return (
    <div>
      <Banner {...ExperiencePageData.bannerData} />
      <Explore {...ExperiencePageData.experience} />
      <BoatTours {...ExperiencePageData.tourData} />
    </div>
  );
};

export default page;
