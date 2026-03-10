import { PageHeader } from "../components/PageHeader";

import "./styles.css";
import logo from "@/public/studebaker-logo.png";

const SITE_URL = "bradonstudebaker.com";
const EMAIL = "bradon.studebaker@gmail.com";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main
        className="flex min-h-screen w-full flex-col items-center"
        style={{
          objectFit: "cover",
        }}
      >
        <PageHeader pageName="Contact" />
        <div
          className="business-card p-2 flex flex-col items-start justify-between m-3 mt-5"
          style={{
            backgroundImage: `url(${logo.src})`,
          }}
        >
          <div>
            <h2 className="business-card-header uppercase">
              Bradon Studebaker
            </h2>
            <a href="https://www.google.com/maps/search/Baltimore,%20MD,%20USA">
              Baltimore, MD
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <a href={SITE_URL}>{SITE_URL}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </main>
    </div>
  );
}
