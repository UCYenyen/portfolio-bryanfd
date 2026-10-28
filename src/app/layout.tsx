import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";
import LetsTalk from "@/components/layout/LetsTalk";
import SplashCursor from "@/components/ui/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ucyenyen.dev";
const DESCRIPTION =
  "Bryan Fernando Dinata is a Fullstack AI/ML Developer building machine learning models and the Next.js, Prisma and PostgreSQL web apps that serve them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bryan Fernando Dinata | Fullstack AI/ML Developer",
    template: "%s | Bryan Fernando Dinata",
  },
  description: DESCRIPTION,
  keywords: [
    "Fullstack AI/ML Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Fullstack Developer",
    "Next.js",
    "Python",
    "scikit-learn",
    "Bryan Fernando Dinata",
  ],
  authors: [{ name: "Bryan Fernando Dinata", url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bryan Fernando Dinata",
    title: "Bryan Fernando Dinata | Fullstack AI/ML Developer",
    description: DESCRIPTION,
    images: [{ url: "/images/projects/gf-food-predictor.webp", width: 1440, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Fernando Dinata",
  alternateName: "ucyenyen",
  url: SITE_URL,
  email: "mailto:bryanfernandodinata@gmail.com",
  jobTitle: "Fullstack AI/ML Developer",
  knowsAbout: ["Machine Learning", "Artificial Intelligence", "Fullstack Web Development", "Next.js", "Python", "PostgreSQL"],
  sameAs: ["https://www.linkedin.com/in/bryan-fernando-dinata-999978328/", "https://github.com/UCYenyen"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NavigationBar />
        {children}
        <Footer />
        <SplashCursor />
        <LetsTalk />
      </body>
    </html>
  );
}
