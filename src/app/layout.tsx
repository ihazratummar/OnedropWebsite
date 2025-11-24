import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneDrop - Blood Donation App | Connect Donors & Recipients Instantly",
  description: "OneDrop is a free blood donation app connecting donors and recipients directly. No middleman, no waiting. Find blood donors near you instantly. Built by Hazrat Ummar Shaikh.",
  keywords: ["OneDrop", "Blood Donation App", "Blood Donor", "Emergency Blood", "Donate Blood India", "Hazrat Ummar Shaikh", "Android App"],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "OneDrop - Every Drop Saves a Life",
    description: "Connect directly with blood donors in your area. Simple, fast, and free.",
    type: "website",
    url: "https://onedrops.online",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "OneDrop Logo",
      },
    ],
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
    title: "OneDrop",
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#dc2626" />
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
