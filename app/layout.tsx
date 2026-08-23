import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comments | Bookchaowalit",
  description: "Moderate demo comments locally.",
  keywords: ["comments", "portfolio"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    title: "Comments | Bookchaowalit",
    description: "Moderate demo comments locally.",
    siteName: "Bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* impeccable:contract
          THESIS: A moderation desk should make the sentence readable before the status becomes the story.
          OWN-WORLD: Editorial archive: paper ground, serif copy, ruled tape, and red/green status stamps.
          STORY: Choose a queue, read the comment, then add or remove a local record.
          FIRST VIEWPORT: Queue controls, review tape, and the new-note form establish the work immediately.
          FORM: A left index rail, text-led inbox, and narrow compose column; no dashboard card grid.
          FINISH: Local-only honesty, status names, visible focus, empty search state, and mobile filter wrap.
          CONCEPT-SEED: 8b72de19 / assigned candidate 7 / direction
        */}
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
