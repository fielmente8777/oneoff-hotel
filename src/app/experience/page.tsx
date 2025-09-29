import React from "react";
import BoatTours from "./components/BoatTours";
import { ExperiencePageData } from "./experiencePageData";

const page = () => {
  return (
    <div>
      <BoatTours {...ExperiencePageData.tourData} />
    </div>
  );
};

export default page;
