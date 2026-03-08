import "./styles.css";
import logo from "@/public/studebaker-logo.png";

const SITE_URL = "bradonstudebaker.com";
const EMAIL = "bradon.studebaker@gmail.com";
const TEL = "9378440250";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main
        className="flex min-h-screen w-full flex-col items-center"
        style={{
          objectFit: "cover",
        }}
      >
        <h1 className="mb-5 w-full border border-white border-t-0 px-3">
          Contact
        </h1>
        <div
          className="business-card p-2 flex flex-col items-start justify-between"
          style={{
            backgroundImage: `url(${logo.src})`,
          }}
        >
          <div>
            <h2 className="business-card-header">Bradon Studebaker</h2>
            <a href="https://www.google.com/maps/search/Baltimore,%20MD,%20USA">
              Baltimore, MD
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <a href={SITE_URL}>{SITE_URL}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${TEL}`}>{TEL}</a>
          </div>
        </div>
      </main>
    </div>
  );
}
