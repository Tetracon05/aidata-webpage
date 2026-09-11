import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#060e1c",
  viewportFit: "cover",
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
        {/* iOS Safari tints the status-bar/notch area from the background-color of
            the nearest fixed element it finds, ignoring theme-color and html/body —
            the navbar's own fixed wrapper is transparent (its navy fill is on an
            inset pill), so without this Safari falls back to a white status bar. */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 z-40 bg-navy-950"
          style={{ height: "max(env(safe-area-inset-top), 44px)" }}
          aria-hidden="true"
        />
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
