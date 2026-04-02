import type { Metadata } from "next";
import { Xanh_Mono } from "next/font/google";

import "./globals.css";
import { PageNavigation } from "./_components/PageNavigation";
import { PageFooter } from "./_components/PageFooter";
import { socialLinks } from "@/app/_config";

export const metadata: Metadata = {
  title: "Bradon Studebaker",
  description: "Web and media based design by Bradon Studebaker",
};

const xanhMono = Xanh_Mono({
  variable: "--font-xanh-mono",
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
        className={`${xanhMono.variable} bg-[var(--page-bg)] text-[var(--page-text-color)]`}
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
