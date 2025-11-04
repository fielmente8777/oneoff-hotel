import { DevelopBanner } from "./components/DevelopBanner";
import DevelopWithUsComponent from "./components/DevelopWithUs";
import { DevelopWithUsPageData } from "./developWithUsData";

export default function DevelopWithUs() {
  return (
    <main>
      <DevelopBanner {...DevelopWithUsPageData.bannerData} />
      <DevelopWithUsComponent {...DevelopWithUsPageData.whyChooseUs} />
    </main>
  );
}
