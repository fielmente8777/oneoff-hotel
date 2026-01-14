"use client";
import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoProps {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const HLSSEOVideo: React.FC<VideoProps> = ({
  src,
  poster,
  controls = true,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith(".m3u8")) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari (native HLS)
        video.src = src;
      } else if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
          lowLatencyMode: false,
        });

        hls.loadSource(src);
        hls.attachMedia(video);

        return () => {
          hls.destroy();
        };
      }
    } else {
      video.src = src; // MP4 fallback
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      className="w-full h-full object-cover "
    />
  );
};

export default HLSSEOVideo;
