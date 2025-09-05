// src/pages/Home.tsx
import "../../style/Home.css";
import HomeVideo from "./HomeVideo";
import { DBHome } from "../../DB/DB";

export default function Home() {
  return (
    <div className="homePai">
      <div className="logoGrande">
        <img src={DBHome.logoGrande} alt="Logo" />
      </div>

      <div className="sobrepor" />

      <HomeVideo />

      <div className="degradeHeader">
        <img src={DBHome.degradeHeader} alt="Degradê" />
      </div>
    </div>
  );
}
