// src/pages/Home.tsx
import { useEffect, useRef, useState } from "react";
import "../../style/Home.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const setRate = () => { v.playbackRate = 0.6; };
    const keepPlaying = async () => { if (v.paused) await v.play(); };

    setRate();
    v.addEventListener("loadedmetadata", setRate);
    v.addEventListener("ratechange", setRate);
    v.addEventListener("pause", keepPlaying);

    return () => {
      v.removeEventListener("loadedmetadata", setRate);
      v.removeEventListener("ratechange", setRate);
      v.removeEventListener("pause", keepPlaying);
    };
  }, [isMobile]);

  const videoSrc = isMobile ? "/home mobile.mp4" : "/home pc.mp4";

  return (
    <div className="homePai">
      <div className="logoGrande">
        <img src="/wecare logo.png" alt="Logo" />
      </div>

      <div className="sobrepor" />

      <video
        ref={videoRef}
        className="bgVideo"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </div>
  );
}
