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
  openGraph: {
    title: "OneDrop - Every Drop Saves a Life",
    description: "Connect directly with blood donors in your area. Simple, fast, and free.",
    type: "website",
    url: "https://onedrops.online",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
