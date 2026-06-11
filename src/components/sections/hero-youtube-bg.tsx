"use client";
import { useEffect, useRef } from "react";

const VIDEO_ID = "HeU0S4LOaWs";
const EMBED_SRC =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&disablekb=1&modestbranding=1&playsinline=1` +
  `&rel=0&showinfo=0&iv_load_policy=3&start=0&end=40&enablejsapi=1`;

export default function HeroYoutubeBackground() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const nudgePlay = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    // Mobile browsers often block iframe autoplay; explicitly command the
    // player to mute + play via the YouTube IFrame API.
    win.postMessage(JSON.stringify({ event: "command", func: "mute", args: [] }), "*");
    win.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
  };

  useEffect(() => {
    // Gesture fallback: if autoplay was blocked, the first touch/tap anywhere
    // counts as a user gesture and lets the play command succeed.
    const opts = { once: true, passive: true } as const;
    window.addEventListener("touchstart", nudgePlay, opts);
    window.addEventListener("click", nudgePlay, opts);
    return () => {
      window.removeEventListener("touchstart", nudgePlay);
      window.removeEventListener("click", nudgePlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <iframe
        ref={iframeRef}
        onLoad={nudgePlay}
        // THIS IS THE MAGIC MATH TRICK FOR YOUTUBE COVERS
        className="absolute top-1/2 left-1/2 w-[max(100vw,177.77vh)] h-[max(56.25vw,100vh)] -translate-x-1/2 -translate-y-1/2"
        src={EMBED_SRC}
        title=""
        frameBorder="0"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
}
