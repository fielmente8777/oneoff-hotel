import Banner from "@/components/banners/Banner";
import { aboutPageData } from "./aboutPageData";
import StayAt from "./components/StayAt";
import Gallery from "./components/Gallery";
import HomeAbout from "../(home)/components/HomeAbout";
import JoinsUsAt from "./components/JoinsUsAt";

export default function AboutUs() {
  return (
    <main>
      <Banner {...aboutPageData.bannerData} />
      <HomeAbout
        {...aboutPageData.aboutStayPage}
        wrapperClassName="max-w-3xl"
      />
      <Gallery images={aboutPageData.images} />
      <StayAt {...aboutPageData.stayAt} />
      <JoinsUsAt {...aboutPageData.joinUsAt} />
    </main>
  );
}
