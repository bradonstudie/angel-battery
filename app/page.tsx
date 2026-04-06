import Image from "next/image";
import shirtFront from "@/public/human-shield/shirt-front.jpg";
import shirtBack from "@/public/human-shield/shirt-back.jpg";

import { createPageTheme } from "@/app/_lib/createPageTheme";
const { metadata, styleTag } = createPageTheme("default");
export { metadata };

export default function Home() {
  return (
    <>
      <style>{styleTag}</style>
      <h1 className="sr-only">Projects</h1>

      <div className="flex justify-center gap-10">
        <Image
          src={shirtFront}
          alt="Human Shield - longsleeve front"
          className="w-100 h-100 aspect-square -rotate-5"
        />
        <Image
          src={shirtBack}
          alt="Human Shield - longsleeve front"
          className="w-100 h-100 aspect-square rotate-5"
        />
        <video
          src={"/nuke.mp4"}
          width={200}
          loop
          autoPlay
          playsInline
          className="rotate-5 border border-dashed border-red-500"
        />
      </div>
    </>
  );
}
