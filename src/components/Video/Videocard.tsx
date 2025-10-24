import Link from "next/link";
import YoutubePlayer from "./YoutubePlayer";
import SEOVideo from "./SEOVideo";

interface VideocardProps {
  src: string;
  href?: string;
  label?: string;
  thumbnail: string;
}

const Videocard: React.FC<VideocardProps> = ({
  src,
  href,
  label,
  thumbnail,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="max-md:hidden block relative w-full max-md:aspect-[4/4] aspect-[4/3] rounded-lg overflow-hidden">
        <YoutubePlayer
          poster={thumbnail}
          url={src}
          youtubeUrl={href || ""}
          title={label || ""}
        />
      </div>

      <div className="hidden max-md:block overflow-hidden">
        <SEOVideo src={src} poster={thumbnail} />
      </div>
      <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-primary font-medium"
          href={href || ""}
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default Videocard;
