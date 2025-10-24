import { DevelopBanner } from "./components/DevelopBanner";
import { DevelopGrid } from "./components/DevelopGrid";
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
