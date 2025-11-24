"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#how" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/onedrop_logo.png"
            alt="OneDrop Logo"
            width={50}
            height={50}
            className="object-contain hover:scale-105 transition-transform duration-200"
          />
          <div className={cn("font-bold text-xl tracking-tight", isScrolled ? "text-gray-900" : "text-white")}>
            OneDrop
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-red-500",
                isScrolled ? "text-gray-600" : "text-gray-200 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#download"
            className={cn(
              "px-6 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg",
              isScrolled
                ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-600/20"
                : "bg-white text-red-600 hover:bg-gray-50"
            )}
          >
            Get the app
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-gray-800" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-gray-800" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 font-medium hover:text-red-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#download"
                className="bg-red-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get the app
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
