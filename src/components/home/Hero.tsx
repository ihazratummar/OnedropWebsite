"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-red-700 to-red-900 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-red-100 uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        Every drop saves a life
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
                >
                    OneDrop
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-lg md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    Connecting blood donors and recipients instantly. <br className="hidden md:block" />
                    No middleman. No waiting. Just people helping people.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        href="#download"
                        className="px-8 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Get the App
                    </Link>
                    <Link
                        href="#about"
                        className="px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
                    >
                        Our Mission
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
