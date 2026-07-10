import { ExploreExperienceDataProps } from "@/@types/type";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import YoutubePlayer with lazy loading (no SSR to prevent hydration mismatch)
const YoutubePlayer = dynamic(() => import("../Video/YoutubePlayer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <span>Loading video...</span>
    </div>
  ),
});

const ExperiencesCard: React.FC<ExploreExperienceDataProps["cards"][0]> = ({
  title,
  description,
  src,
  videoSrc,
  thumbNail,
}) => {
  const href =
    "/xperiences/#" +
    title
      ?.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  // const slug = title
  //   ?.toLowerCase()
  //   .replace(/\s+/g, "-")
  //   .replace(/[^a-z0-9-]/g, "");

  // const href = `/xperiences?location=${location}#${slug}`;

  return (
    <>
      <div className="w-full cursor-pointer relative aspect-[4/3.5] group overflow-hidden">
        <div className="w-full h-full inset-0 bg-black/10 z-10 absolute pointer-events-none" />
        {src && (
          <Link
            href={href || ""}
            className="block w-full h-full pointer-events-auto"
          >
            <Image
              src={src}
              alt={title || "image"}
              fill
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="transition-transform duration-300 group-hover:-translate-y-20">
                <h3 className="text-xl text-white max-xl:text-center font-anton">{title}</h3>
              </div>

              <p className="absolute left-4 right-4 bottom-4 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {description?.slice(0, 100)}{" "}
                <span className="font-semibold">Read More</span>
              </p>
            </div>
          </Link>
        )}
      </div>
      <p className="text-center xl:hidden block px-4 pt-4">
        {description?.slice(0, 100) || ""}{" "}
        <span className="text-secondary">Read More</span>
      </p>
    </>
  );
};

export default ExperiencesCard;
