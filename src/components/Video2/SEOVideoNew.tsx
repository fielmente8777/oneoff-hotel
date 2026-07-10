import React, { forwardRef } from "react";

interface VideoProps {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  title?: string;
  tracks?: {
    src: string;
    kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    srcLang?: string;
    label?: string;
  }[];
}

// forwardRef lets the parent (LazyLoadedVideo) grab the <video> element
// directly so it can flip `muted` on/off after a user click,
// which browser autoplay-with-sound policies require.
const SEOVideo = forwardRef<HTMLVideoElement, VideoProps>(
  (
    {
      src,
      poster,
      width,
      height,
      controls = true,
      autoPlay = false,
      loop = false,
      muted = false,
      preload = "auto",
      title,
      tracks = [],
    },
    ref
  ) => {
    return (
      <>
        <video
          ref={ref}
          src={src}
          poster={poster}
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          preload={preload}
          picture-in-picture="false"
          title={title}
          controlsList="nodownload"
          className="w-full h-full object-cover overflow-hidden"
        >
          {tracks.map((track, index) => (
            <track
              key={index}
              src={track.src}
              kind={track.kind}
              srcLang={track.srcLang}
              label={track.label}
            />
          ))}
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </>
    );
  }
);

SEOVideo.displayName = "SEOVideo";

export default SEOVideo;
