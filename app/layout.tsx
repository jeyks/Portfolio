import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title:  "Justine Resureccion — Portfolio",
  description: personalInfo.introduction,
  keywords: [
    "software developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    personalInfo.fullName,
  ],
  authors: [{ name: personalInfo.fullName }],
  openGraph: {
    title: `${personalInfo.fullName} — ${personalInfo.title}`,
    description: personalInfo.introduction,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-blue-600 text-white px-3 py-2 rounded"
          >
            Skip to content
          </a>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
