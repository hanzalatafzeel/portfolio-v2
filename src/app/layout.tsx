import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nine-tan-34.vercel.app"),
  title: "Hanzala Tafzeel — Full Stack Developer & BS Data Science @ IIT Madras",
  description:
    "Portfolio of Hanzala Tafzeel — full stack developer and data science student at IIT Madras. Django, Flask, React, PyTorch, NLP, and a 2nd-place hackathon you should know about.",
  keywords: [
    "Hanzala Tafzeel",
    "Full Stack Developer",
    "Django",
    "React",
    "Machine Learning",
    "NLP",
    "IIT Madras",
    "Data Science",
  ],
  authors: [{ name: "Hanzala Tafzeel", url: "https://github.com/hanzalatafzeel" }],
  openGraph: {
    title: "Hanzala Tafzeel — Full Stack Developer",
    description:
      "Full stack developer & BS Data Science @ IIT Madras. Building fast, intelligent web experiences end to end.",
    type: "website",
    images: ["/projects/ecommerce-storefront.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanzala Tafzeel — Full Stack Developer",
    description: "Django · React · PyTorch — building fast, intelligent web experiences.",
    images: ["/projects/ecommerce-storefront.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-ink font-body text-fog">{children}</body>
    </html>
  );
}