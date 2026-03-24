import "./styles.css";
import logo from "@/public/studebaker-logo.png";

import { createPageTheme } from "@/app/lib/createPageTheme";

const { metadata, styleTag } = createPageTheme("red");

export { metadata };

const SITE_URL = "bradonstudebaker.com";
const EMAIL = "bradon.studebaker@gmail.com";

interface BusinessCardConfig {
  backgroundHex: string;
  foregroundHex: string;
  id: number;
}

const businessCardConfigs: BusinessCardConfig[] = [
  {
    id: 0,
    backgroundHex: "#ffffff",
    foregroundHex: "#000000",
  },
  {
    id: 1,
    backgroundHex: "#ffffff",
    foregroundHex: "#000000",
  },
  {
    id: 2,
    backgroundHex: "#ffffff",
    foregroundHex: "#000000",
  },
];

export default function Contact() {
  return (
    <>
      <style>{styleTag}</style>
      <div className="mt-5">
        <h1 className="uppercase text-7xl">Please, take a card</h1>
      </div>
      <div className="grid lg:grid-cols-3 mt-5 gap-3">
        {businessCardConfigs
          .sort((a, b) => a.id - b.id)
          .map((businessCardConfig) => (
            <div
              key={businessCardConfig.id}
              className="business-card py-2 px-3 flex flex-col items-start justify-between"
              style={{
                backgroundImage: `url(${logo.src})`,
                backgroundColor: businessCardConfig.backgroundHex,
                color: businessCardConfig.foregroundHex,
              }}
            >
              <div>
                <h2 className="business-card-header uppercase text-3xl px-2">
                  Bradon Studebaker
                </h2>
                <a
                  href="https://www.google.com/maps/search/Baltimore,%20MD,%20USA"
                  className="uppercase px-2"
                >
                  Baltimore, MD
                </a>
              </div>
              <div className="flex flex-col justify-between uppercase">
                <a href={SITE_URL} className="px-2 mb-1">
                  {SITE_URL}
                </a>
                <a href={`mailto:${EMAIL}`} className="px-2">
                  {EMAIL}
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
