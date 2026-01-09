"use client";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const YoutubePlayer = ({
  url,
  title,
  poster,
}: {
  url: string;
  youtubeUrl: string;
  title: string;
  poster: string;
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isPlaying) {
        videoElement.play().catch((error) => {
          console.error("Error trying to play video:", error);
        });
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const preventPiP = (event: Event) => {
      event.preventDefault(); // Prevent entering PiP mode
    };

    if (videoElement) {
      videoElement.addEventListener(
        "enterpictureinpicture",
        preventPiP as EventListener
      );
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "enterpictureinpicture",
          preventPiP as EventListener
        );
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        src={url}
        title={title}
        loop
        muted={true}
        controls={isPlaying}
        picture-in-picture="false"
        controlsList="nodownload noplaybackrate"
        poster={poster}
        className="w-full h-full object-cover"
      />
      {/* <Link
        href={youtubeUrl}
        target="_blank"
        className="absolute top-5 opacity-0 group-hover:opacity-100 pointer-events-auto cursor-pointer bg-white/50 right-5 px-2 py-2 rounded-sm border border-primary hover:text-slate-50 hover:bg-primary duration-500 ease-in text-primary text-xs uppercase font-bold"
        aria-label="Watch on YouTube"
      >
        Watch on Youtube
      </Link> */}
      <button
        onClick={handlePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 aspect-square flex items-center justify-center bg-white/30 hover:bg-secondary border group-hover:bg-secondary duration-500 ease-in hover:text-white text-xl uppercase font-bold rounded-full"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default YoutubePlayer;
