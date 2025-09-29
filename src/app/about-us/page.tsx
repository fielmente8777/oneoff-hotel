import Banner from "@/components/banners/Banner";
import { aboutPageData } from "./aboutPageData";

export default function AboutUs() {
  return (
    <main>
      <Banner {...aboutPageData.bannerData} />
    </main>
  );
}
