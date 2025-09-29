import { ExploreExperienceDataProps } from "@/@types/type";
import Image from "next/image";
import dynamic from "next/dynamic";

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
  return (
    <div className="w-full cursor-pointer relative aspect-[4/3.5] group overflow-hidden">
      {src && (
        <>
          <Image
            src={src}
            alt={title || "image"}
            fill
            className="object-cover"
            loading="lazy" // Explicit lazy load
          />
          <h3 className="absolute text-primary group-hover:top-0 -top-full left-0 px-4 py-2 duration-300 transition-all ease-in-out bg-background w-full font-anton">
            {title}
          </h3>
          <p className="text-primary absolute group-hover:bottom-0 -bottom-full left-0 px-4 py-2 duration-300 transition-all ease-in-out bg-background w-full">
            {description}
          </p>
        </>
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
  );
};

export default ExperiencesCard;
