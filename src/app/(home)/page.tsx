import Banner from "@/components/banners/Banner";
import { homePageData } from "./homePageData";
import HomeAbout from "./components/HomeAbout";
import Experiences from "./components/Experiences";
import UpcomingHotels from "./components/UpcomingHotels";
import LocationsCards from "./components/LocationsCards";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <HomeAbout {...homePageData.aboutHomePage} />
      <LocationsCards locations={homePageData.locations} />
      <Experiences {...homePageData.exploreExperienceData} />
      <UpcomingHotels cards={homePageData.upcomingHotels}  />
    </main>
  );
}
