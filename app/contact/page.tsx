import logo from "@/public/studebaker-logo.png";

import { createPageTheme } from "@/app/_lib/createPageTheme";
import { PageHeader } from "../_components/UI/PageHeader";
import { TextHighlight } from "../_components/UI/TextHighlight";
import { BusinessCard } from "../_components/UI/BusinessCard";

const { metadata, styleTag } = createPageTheme("default");
export { metadata };

const EMAIL = "bradon.studebaker@gmail.com";
const SITE_URL = "bradonstudebaker.com";
const MAP_URL = "https://www.google.com/maps/search/Baltimore,%20MD,%20USA";
const BUSINESS_CARD_COUNT = 3;

export default function Contact() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Take a Card" />
      <p className="lg:text-3xl text-xl mb-5">
        Do you have an <TextHighlight>idea?</TextHighlight>{" "}
        <a className="underline" href={`mailto:${EMAIL}`}>
          Shoot me an email.
        </a>
      </p>
      {/* Business Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 justify-center auto-rows-max">
        {[...Array(BUSINESS_CARD_COUNT)].map((e, i) => (
          <BusinessCard
            key={i}
            backgroundImageSrc={logo.src}
            emailAddress={EMAIL}
            siteUrl={SITE_URL}
            mapUrl={MAP_URL}
          />
        ))}
      </div>
    </>
  );
}
