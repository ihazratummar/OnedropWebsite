"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section id="download" className="py-24 bg-red-600 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Save lives with just a few taps.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto mb-10"
                >
                    Download OneDrop today and be a hero! 🚑❤️
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hazrat.onedrop&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl"
                    >
                        Download for Android
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
