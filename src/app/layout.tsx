import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Next.js's app/icon.png file convention serves the favicon through a cached
// route handler whose URL hash does not change when the file's content changes
// (confirmed empirically: identical hash survived a full .next wipe + fresh
// server + multiple different file contents). That makes browser favicon
// caches impossible to bust. Serving it as a plain static asset instead, with
// a version query string we control, guarantees a fresh URL whenever the logo
// changes — bump FAVICON_VERSION any time the logo file is replaced.
const FAVICON_VERSION = "2";
const faviconUrl = `/brand/logo.png?v=${FAVICON_VERSION}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibtuaidata.com.tr"),
  title: {
    default: `${site.shortName} — ${site.name}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "AIDATA",
    "İstiklal Bilim ve Teknoloji Üniversitesi",
    "Yapay Zeka",
    "Veri Bilimi",
    "Öğrenci Topluluğu",
  ],
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
  },
  openGraph: {
    title: `${site.shortName} — ${site.name}`,
    description: site.description,
    images: ["/brand/logo.png"],
    locale: "tr_TR",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.fullBrand,
  alternateName: site.name,
  url: "https://www.ibtuaidata.com.tr",
  logo: "https://www.ibtuaidata.com.tr/brand/logo.png",
  description: site.description,
  email: site.email,
  foundingDate: "2025-02-26",
  sameAs: [site.social.instagram, site.social.x],
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: site.university,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
