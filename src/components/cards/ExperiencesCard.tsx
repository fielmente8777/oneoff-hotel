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
        <div className="w-full h-full inset-0 max-lg:bg-gradient-to-b from-black/0 to-black/70 z-10 absolute pointer-events-none" />
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

            <h3 className="absolute text-primary lg:group-hover:top-0 lg:-top-full max-lg:bottom-0 max-lg:text-center left-0 right-0 px-4 py-2 duration-300 transition-all ease-in-out text-2xl max-lg:text-white lg:bg-background w-full font-anton z-20">
              {title}
            </h3>
            <p className="text-primary lg:absolute lg:group-hover:bottom-0 lg:-bottom-full left-0 right-0 px-4 py-2 duration-300 transition-all ease-in-out bg-background w-full z-10">
              {description?.slice(0, 100) || ""}{" "}
              <span className="text-secondary">Read More</span>
            </p>
          </Link>
        )}
        {videoSrc && (
          <div className="w-full h-full relative">
            <YoutubePlayer
              poster={thumbNail || ""}
              url={videoSrc}
              youtubeUrl={videoSrc}
              title={title || ""}
            />
            {!videoSrc && thumbNail && (
              <Image
                src={thumbNail}
                alt="thumbnail"
                fill
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>
        )}
      </div>
      <p className="text-center lg:hidden block px-4 pt-4">
        {description?.slice(0, 100) || ""}{" "}
        <span className="text-secondary">Read More</span>
      </p>
    </>
  );
};

export default ExperiencesCard;
