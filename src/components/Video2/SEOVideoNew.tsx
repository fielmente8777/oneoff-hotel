"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

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
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Expose the video element to the parent
    useImperativeHandle(ref, () => videoRef.current!, []);

    // Pause other videos when this one starts
    const handlePlay = () => {
      document.querySelectorAll("video").forEach((video) => {
        if (video !== videoRef.current) {
          video.pause();
        }
      });
    };

    // Observe visibility
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          threshold: 0.6,
        }
      );

      const target = containerRef.current;

      if (target) observer.observe(target);

      return () => {
        if (target) observer.unobserve(target);
      };
    }, []);

    // Play / Pause on scroll
    useEffect(() => {
      const video = videoRef.current;

      if (!video) return;

      if (isInView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, [isInView]);

    return (
      <div ref={containerRef} className="w-full h-full">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          preload={preload}
          title={title}
          playsInline
          disablePictureInPicture
          controlsList="nodownload"
          className="w-full h-full object-cover overflow-hidden"
          onPlay={handlePlay}
        >
          {tracks.map((track, index) => (
            <track key={index} {...track} />
          ))}
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </div>
    );
  }
);

SEOVideo.displayName = "SEOVideo";

export default SEOVideo;