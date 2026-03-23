import "./styles.css";
import logo from "@/public/studebaker-logo.png";

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
    backgroundHex: "#e6e6e6",
    foregroundHex: "#202d85",
  },
  {
    id: 1,
    backgroundHex: "#e6e6e6",
    foregroundHex: "#202d85",
  },
  {
    id: 2,
    backgroundHex: "#e6e6e6",
    foregroundHex: "#202d85",
  },
];

export default function Contact() {
  return (
    <main className="flex w-full flex-col">
      <div className="px-3 mt-5">
        <h1 className="uppercase text-7xl">Please, take a card</h1>
      </div>
      <div className="columns-3 px-3 mt-3">
        {businessCardConfigs.map((businessCardConfig) => (
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
              <h2 className="business-card-header uppercase text-3xl">
                Bradon Studebaker
              </h2>
              <a
                href="https://www.google.com/maps/search/Baltimore,%20MD,%20USA"
                className="uppercase"
              >
                Baltimore, MD
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <a href={SITE_URL}>{SITE_URL}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
