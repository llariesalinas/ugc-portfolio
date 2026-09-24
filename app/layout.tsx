import type { Metadata } from "next";
import { Caveat, EB_Garamond, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Llarie Salinas — UGC Creator",
  description:
    "Beauty, tech & lifestyle UGC by Llarie Salinas, a content creator in Iloilo City, Philippines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ebGaramond.variable} ${caveat.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
