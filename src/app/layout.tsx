import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneDrop Blood Donation App | Free Blood Donor Finder India | Blood Donation Website",
  description: "OneDrop is India's leading free blood donation app and website connecting blood donors and recipients instantly. Find blood donors near you, post urgent blood requests, and save lives. No middleman, no waiting - just people helping people through our blood donation platform.",
  keywords: [
    "OneDrop Blood Donation",
    "Blood Donation App",
    "Blood Donation Website",
    "Blood Donation",
    "Blood App",
    "Blood Website",
    "Blood Donation India",
    "Indian Blood Donation App",
    "Free Blood Donor App",
    "Find Blood Donors",
    "Emergency Blood Request",
    "Blood Donor Finder India",
    "Online Blood Donation",
    "Blood Donation Platform",
    "Donate Blood India",
    "Blood Bank Alternative",
    "Instant Blood Donor",
    "Hazrat Ummar Shaikh"
  ],
  authors: [{ name: "Hazrat Ummar Shaikh" }],
  creator: "Hazrat Ummar Shaikh",
  publisher: "OneDrop",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://onedrops.online",
  },
  openGraph: {
    title: "OneDrop - India's Free Blood Donation App & Website | Every Drop Saves a Life",
    description: "Connect with blood donors instantly across India. Free blood donation app and website for emergency blood requests. No middleman, direct connection to save lives.",
    type: "website",
    url: "https://onedrops.online",
    siteName: "OneDrop Blood Donation",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneDrop Blood Donation App - India's Free Blood Donor Finder Platform",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "OneDrop Blood Donation App Logo - Free Blood Donor Finder India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneDrop - Free Blood Donation App India",
    description: "Find blood donors instantly. India's trusted blood donation platform.",
    images: ["/og-image.png"],
    creator: "@hazratummar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/onedrop_logo.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OneDrop Blood Donation",
  },
  other: {
    "msapplication-TileColor": "#dc2626",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'OneDrop Blood Donation App',
    description: 'Free blood donation app and website connecting donors and recipients across India',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    author: {
      '@type': 'Person',
      name: 'Hazrat Ummar Shaikh',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
