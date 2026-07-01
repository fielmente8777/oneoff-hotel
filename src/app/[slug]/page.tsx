import Banner from "@/components/banners/Banner";
import { locationPageData } from "./locationPagesData";
import AboutLocation from "./components/AboutLocation";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import UpComingLocations from "./components/UpComingLocations";
import Amenties from "./components/Amenties";
import { Metadata } from "next";
import SlidingGallery from "./components/SlidingGallery";
import RareExperience from "./components/RareExperience";
import NewRooms from "./components/NewRooms";
import PetFriendly from "./components/PetFriendly";
import KnowMore from "./components/KnowMore";
import HowtoReach from "./components/HowtoReach";

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = await locationPageData?.map((data) => ({ slug: data.slug }));
  return paths;
}

// export async function generateMetadata(props: Params) {
//   const params = await props.params;
//   const paramsData = await params.slug;

//   const slugPageData = locationPageData?.find(
//     (data) => data.slug === paramsData
//   );
//   return {
//     title: slugPageData?.metaData?.title,
//     description: slugPageData?.metaData?.description,
//     // alternates: {
//     //   canonical: `https://immigration.theapexcodes.com/${paramsData}/`,
//     //   languages: {
//     //     "en-US": `https://immigration.theapexcodes.com/${paramsData}/`,
//     //     "fr-CA": `https://immigration.theapexcodes.com/${paramsData}/`,
//     //   },
//     // },
//     // openGraph: {
//     //   title: slugPageData?.metaData?.title,
//     //   description: slugPageData?.metaData?.description,
//     // },
//   };
// }

export async function generateMetadata(props: Params): Promise<Metadata> {
  const { slug } = await props.params;

  const pageData = locationPageData.find((item) => item.slug === slug);

  // Fallback metadata (important for build safety)
  if (!pageData || !pageData.metaData) {
    return {
      title: "ONE-OFF Hotels",
      description: "ONE-OFF Hotels",
      alternates: {
        canonical: "https://oneoffhotels.com/",
      },
    };
  }

  const { title, description } = pageData.metaData;

  const canonicalUrl = `https://oneoffhotels.com/${slug}/`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "ONE-OFF Hotels",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
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
      {pageData.newRooms && <NewRooms {...pageData.newRooms} />}
      {pageData.amenties && <Amenties amenties={pageData?.amenties} />}
      {pageData.petFriendly && <PetFriendly {...pageData.petFriendly} />}
      {pageData.slidingGallery && (
        <SlidingGallery images={pageData.slidingGallery} />
      )}
      {pageData.experience && <RareExperience {...pageData.experience} />}
      {pageData.gallery && <Gallery {...pageData.gallery} />}
      {pageData.howtoReach && <HowtoReach {...pageData.howtoReach} />}
      {pageData.knowMore && <KnowMore {...pageData.knowMore} />}

      {pageData.upComingData && (
        <UpComingLocations {...pageData.upComingData} />
      )}
    </main>
  );
}
