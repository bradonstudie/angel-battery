import { createPageTheme } from "@/app/lib/createPageTheme";
import { PageHeader } from "../components/UI/PageHeader";
import { TextHighlight } from "../components/UI/TextHighlight";
import Link from "next/link";

const { metadata, styleTag } = createPageTheme("green");

export { metadata };

export default function About() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Welcome to my studio" />
      <div className="text-xl grid grid-cols-2">
        <p className="uppercase font-bold">Who?</p>
        <p className="text-balance">
          My name is <TextHighlight>Bradon Studebaker.</TextHighlight> I&apos;m
          a designer and engineer from Bellefontaine, Ohio that currently
          resides in Baltimore, Maryland.
        </p>
      </div>
      <div className="text-xl grid grid-cols-2 mt-3">
        <p className="uppercase font-bold">What?</p>
        <p className="text-balance">
          I design and build{" "}
          <TextHighlight>whatever you can imagine</TextHighlight> across the
          physical and digital mediums from idea to implementation.
        </p>
      </div>
      <div className="text-xl grid grid-cols-2 mt-3">
        <p className="uppercase font-bold">Why?</p>
        <p className="text-balance">
          Music, forums, websites, and books were my connection to the world
          growing up in rural Ohio. Great design should be{" "}
          <TextHighlight>honest</TextHighlight> and{" "}
          <TextHighlight>accessible.</TextHighlight> I find immense
          disappointment in the dishonesty and predation we find ourslves
          subject to from modern media and technology.
        </p>
      </div>
      <div className="text-xl grid grid-cols-2 mt-3">
        <p className="uppercase font-bold">How?</p>
        <p className="text-balance">
          I offer a full suite of services from modern web software to physical
          media backed by 10 years of work using whatever technology best fits
          the need. <TextHighlight>Have an idea?</TextHighlight>{" "}
          <Link href={"/contact"} className="underline">
            Let&apos;s get in touch.
          </Link>
        </p>
      </div>
    </>
  );
}
