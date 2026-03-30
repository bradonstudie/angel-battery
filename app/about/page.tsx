import { createPageTheme } from "@/app/lib/createPageTheme";
import { PageHeader } from "../components/UI/PageHeader";
import { TextHighlight } from "../components/UI/TextHighlight";
import Link from "next/link";

const { metadata, styleTag } = createPageTheme("default");

export { metadata };

export default function About() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Welcome to My Studio" />
      {/* About Info */}
      <p className="lg:text-3xl text-xl">
        My name is <TextHighlight>Bradon,</TextHighlight> a Baltimore based
        designer and engineer blending development
        <sup>
          <a href="#development">1</a>
        </sup>
        , design
        <sup>
          <a href="#design">2</a>
        </sup>{" "}
        and branding
        <sup>
          <a href="#branding">3</a>
        </sup>{" "}
        thoughtfully across the physical and web from{" "}
        <TextHighlight>ideation</TextHighlight> to{" "}
        <TextHighlight>implementation.</TextHighlight>
      </p>
      <p className="lg:text-3xl text-xl mt-3">
        If you have a <TextHighlight>strong vision,</TextHighlight> I would love
        to help bring it to life.{" "}
        <Link className="underline text-blue-500" href={"/contact"}>
          Let&apos;s get in touch.
        </Link>
      </p>
      <div className="flex">
        <div className="w-2xl border border-dashed mt-3 py-3">
          <ol className="pl-7 list-decimal">
            <li id="development">
              Web development, search engine optimization, content management
              systems, commerce
            </li>
            <li id="design">
              Web design, illustration, type, print matter, user experience
            </li>
            <li id="branding">Logo design, brand identity, brand systems</li>
          </ol>
        </div>
      </div>

      {/* Document  */}
      <h2 className="mt-12 mb-3 lg:text-5xl text-3xl">About Me</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
        <div className="bg-document aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3">
          <h3 className="text-2xl uppercase">Listening to:</h3>
          <ul>
            <li>
              Defeated Sanity - <i>Disposal of the Dead</i>
            </li>
            <li>
              The Replacements - <i>Tim</i>
            </li>
            <li>
              Nasum - <i>Inhale/Exhale</i>
            </li>
            <li>
              Discordance Axis - <i>Jouhou</i>
            </li>
            <li>
              T.S.O.L. - <i>Change Today?</i>
            </li>
            <li>
              Incantation - <i>Diabolical Conquest</i>
            </li>
            <li>
              Insect Warfare - <i>World Extermination</i>
            </li>
          </ul>
        </div>

        <div className="bg-document-2 aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3">
          <h3 className="text-2xl uppercase">Browsing:</h3>
          <ul>
            <li>
              <a href="https://gifcities.org/" target="_blank">
                GifCities
              </a>
            </li>
            <li>
              <a
                href="https://archive.org/details/sparrowsnestlibrary"
                target="_blank"
              >
                Sparrows&apos; Nest Archive
              </a>
            </li>
            <li>
              <a
                href="https://github.com/r-lyeh/single_file_libs"
                target="_blank"
              >
                r-lyeh/single_file_libs
              </a>
            </li>
            <li>
              <a href="https://uncut.wtf/" target="_blank">
                UNCUT.wtf Typeface Catalog
              </a>
            </li>
            <li>
              <a href="https://minimal.gallery/" target="_blank">
                Minimal Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-document aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3">
          <h3 className="text-2xl uppercase">Thinking about:</h3>
          <ul>
            <li>Sticky notes</li>
            <li>System fonts</li>
            <li>Half-Life (1998)</li>
            <li>Legibility vs. Recognizability</li>
            <li>90s soccer kits</li>
            <li>Sign painting</li>
          </ul>
        </div>

        <div className="bg-document-2 aspect-square rotate-2 transition hover:rotate-0 w-fill max-w-2xl p-3">
          <h3 className="text-2xl uppercase">Exploring:</h3>
          <ul>
            <li>CSS scroll animations</li>
            <li>Monads</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
