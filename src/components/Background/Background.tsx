import { Overlay } from "./Overlay/Overlay";
import { Picture } from "../ui/Picture/Picture";
import bgImgJpg from "../../assets/images/bg.jpeg";
import bgImgWebp from "../../assets/images/bg.webp";

export function Background() {
  return (
    <div className="bg">
      <Overlay />
      <Picture
        srcUrl={bgImgJpg}
        webpUrl={bgImgWebp}
        alt="Фоновое изображение"
        className="bg__img"
      />
    </div>
  );
}
