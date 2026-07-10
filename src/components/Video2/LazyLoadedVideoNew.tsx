"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuVolume2, LuVolumeX } from "react-icons/lu";


const SEOVideo = dynamic(() => import("./SEOVideoNew"), {
  loading: () => (
    <Image src="/bnr.png" alt="banner" fill className="object-cover" />
  ),
});

interface LazyLoadedVideoProps {
  src: string;
  poster: string;
}

export default function LazyLoadedVideo({ src, poster }: LazyLoadedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    // This click is a real user gesture, so browsers allow unmuting here
    video.muted = !video.muted;
    setIsMuted(video.muted);

    // If it somehow paused, resume playback
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <div className="relative w-full h-full">
      <SEOVideo
        ref={videoRef}
        src={src}
        autoPlay
        loop
        controls={false}
        poster={poster}
        muted={isMuted}
      />

      <button
        type="button"
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute top-26 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        {isMuted ? <LuVolumeX size={20} /> : <LuVolume2 size={20} />}
      </button>
    </div>
  );
}
