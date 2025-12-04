import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MemoRing - La bague connectée pour votre mémoire",
  description: "Découvrez MemoRing, la bague connectée qui enregistre, transcrit et organise vos idées. Votre assistant personnel au bout du doigt.",
  keywords: ["bague connectée", "IA", "transcription", "mémoire", "productivité", "wearable", "tech"],
  authors: [{ name: "MemoRing Team" }],
  openGraph: {
    title: "MemoRing - La bague connectée pour votre mémoire",
    description: "Enregistrez, transcrivez et n'oubliez plus rien avec MemoRing.",
    url: "https://memoring.com", // Remplacez par votre URL réelle
    siteName: "MemoRing",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemoRing - La bague connectée",
    description: "Votre second cerveau, directement à votre doigt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
