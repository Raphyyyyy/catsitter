import { useEffect, useRef } from "react";
import { DBHomeVideo } from "../../DB/DB";
import { useIsMobile } from "../../hooks/IsMobile"; // ajuste o caminho conforme necessário
import "../../style/Home.css";

export default function HomeVideo() {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const setRate = () => {
      v.playbackRate = isMobile ? 0.8 : 0.6;
    };
    const keepPlaying = async () => {
      if (v.paused) await v.play();
    };

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

  const videoSrc = isMobile ? DBHomeVideo.mobile : DBHomeVideo.desktop;

  return (
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
  );
}
