import Banner from "@/components/banners/Banner";
import Experiences from "./components/Experiences";
import HomeAbout from "./components/HomeAbout";
import LocationsCards from "./components/LocationsCards";
import UpcomingCafe from "./components/UpcomingCafe";
import UpcomingHotels from "./components/UpcomingHotels";
import { homePageData } from "./homePageData";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} showBookingForm   />
      <HomeAbout
        {...homePageData.aboutHomePage}
        wrapperClassName="max-w-[45rem]"
      />
      <LocationsCards locations={homePageData.locations} />
      <Experiences {...homePageData.exploreExperienceData} />
      <UpcomingHotels cards={homePageData.upcomingHotels} />
      <UpcomingCafe {...homePageData?.upcomingCafe} />
    </main>
  );
}
