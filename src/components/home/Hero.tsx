"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden"
            aria-label="OneDrop Blood Donation App Hero Section"
        >
            {/* Decorative Elements - Softer colors */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                        Every drop saves a life - Free Blood Donation India
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
                >
                    OneDrop Blood Donation App
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                >
                    India's trusted blood donation website connecting blood donors and recipients instantly. <br className="hidden md:block" />
                    No middleman. No waiting. Find blood donors near you in seconds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        href="#download"
                        className="px-8 py-4 rounded-full bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-600/30"
                        aria-label="Download OneDrop Blood Donation App"
                    >
                        Get the Free Blood App
                    </Link>
                    <Link
                        href="#about"
                        className="px-8 py-4 rounded-full border-2 border-blue-200 bg-white text-gray-700 font-bold text-lg hover:bg-blue-50 hover:border-blue-300 transition-all transform hover:scale-105 shadow-md"
                        aria-label="Learn about OneDrop Blood Donation Mission"
                    >
                        Our Mission
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
