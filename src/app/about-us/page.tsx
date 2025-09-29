import Banner from "@/components/banners/Banner";
import { aboutPageData } from "./aboutPageData";
import StayAt from "./components/StayAt";
import Gallery from "./components/Gallery";

export default function AboutUs() {
  return (
    <main>
      <Banner {...aboutPageData.bannerData} />
      <StayAt {...aboutPageData.stayAt} />
      <Gallery {...aboutPageData.gallery} />
    </main>
  );
}
