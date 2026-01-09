import Banner from "@/components/banners/Banner";
import { locationPageData } from "./locationPagesData";
import AboutLocation from "./components/AboutLocation";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import UpComingLocations from "./components/UpComingLocations";
import Amenties from "./components/Amenties";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = await locationPageData?.map((data) => ({ slug: data.slug }));
  return paths;
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const paramsData = await params.slug;

  const slugPageData = locationPageData?.find(
    (data) => data.slug === paramsData
  );
  return {
    title: slugPageData?.metaData?.title,
    description: slugPageData?.metaData?.description,
    // alternates: {
    //   canonical: `https://immigration.theapexcodes.com/${paramsData}/`,
    //   languages: {
    //     "en-US": `https://immigration.theapexcodes.com/${paramsData}/`,
    //     "fr-CA": `https://immigration.theapexcodes.com/${paramsData}/`,
    //   },
    // },
    // openGraph: {
    //   title: slugPageData?.metaData?.title,
    //   description: slugPageData?.metaData?.description,
    // },
  };
}

export default async function Page({ params }: Params) {
  const resolvedParams = await params;
  const pageData = await locationPageData?.find(
    (data) => data.slug === resolvedParams.slug
  );
  if (!pageData) {
    return <div className="text-center w-full h-full">Page not found</div>;
  }
  return (
    <main>
      {pageData.bannerData && <Banner {...pageData.bannerData} />}
      {pageData.aboutLocation && <AboutLocation {...pageData.aboutLocation} />}
      {pageData.rooms && <Rooms {...pageData.rooms} />}
      {pageData.amenties && <Amenties amenties={pageData?.amenties} />}
      {pageData.gallery && <Gallery {...pageData.gallery} />}

      {pageData.upComingData && (
        <UpComingLocations {...pageData.upComingData} />
      )}
    </main>
  );
}
