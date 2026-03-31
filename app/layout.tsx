import type { Metadata } from "next";
import { Instrument_Serif, Monsieur_La_Doulaise } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { PageNavigation } from "./_components/PageNavigation";
import { PageFooter } from "./_components/PageFooter";
import { socialLinks } from "@/app/_config";

export const metadata: Metadata = {
  title: "Bradon Studebaker",
  description: "Web and music based design by Bradon Studebaker",
};

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

const arialNarrow = localFont({
  weight: "400",
  src: "./arial-narrow.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${instrumentSerif.variable} ${monsieurLaDoulaise.variable} ${arialNarrow.className} bg-[var(--page-bg)] text-[var(--page-text-color)]`}
      >
        <div className="min-h-svh flex flex-col grow">
          <PageNavigation />
          <main className="flex w-full flex-col grow px-3">{children}</main>
          <PageFooter socialLinks={socialLinks} />
        </div>
      </body>
    </html>
  );
}
