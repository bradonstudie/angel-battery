import type { Metadata } from "next";
import {
  Instrument_Serif,
  DM_Mono,
  Monsieur_La_Doulaise,
} from "next/font/google";
import "./globals.css";
import { PageNavigation } from "./components/PageNavigation";
import { PageFooter } from "./components/PageFooter";
import { socialLinks } from "@/app/config";

export const metadata: Metadata = {
  title: "Bradon Studebaker",
  description: "Web and music based design by Bradon Studebaker",
};

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "300",
});

const monsieurLaDoulaise = Monsieur_La_Doulaise({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
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
        className={`${instrumentSerif.variable} ${dmMono.variable} ${monsieurLaDoulaise.variable} bg-[var(--page-bg)] text-[var(--page-text-color)]`}
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
