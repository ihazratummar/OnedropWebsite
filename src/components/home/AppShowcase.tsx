"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Search, AlertCircle, User } from "lucide-react";

const features = [
    {
        title: "Your Lifesaving Hub",
        description: "A simple, intuitive dashboard to manage your blood requests and donation availability. Toggle your status with a single tap.",
        image: "/screenshots/dashboard.png",
        icon: Activity,
        color: "bg-blue-100 text-blue-600",
        gradient: "from-blue-500/20 to-cyan-500/20",
        alt: "OneDrop Blood Donation App Dashboard - Manage Blood Donation Requests India",
    },
    {
        title: "Find Donors Instantly",
        description: "Browse a list of verified blood donors in your area. Filter by blood type and connect directly without any intermediaries.",
        image: "/screenshots/find_donors.png",
        icon: Search,
        color: "bg-red-100 text-red-600",
        gradient: "from-red-500/20 to-orange-500/20",
        alt: "Find Blood Donors Near You - Free Blood Donor Finder India App",
    },
    {
        title: "Emergency Response",
        description: "Post urgent blood requests that instantly notify nearby donors. Every second counts when saving a life.",
        image: "/screenshots/urgent_request.png",
        icon: AlertCircle,
        color: "bg-orange-100 text-orange-600",
        gradient: "from-orange-500/20 to-yellow-500/20",
        alt: "Emergency Blood Request Feature - Urgent Blood Donation India",
    },
    {
        title: "Track Your Impact",
        description: "Manage your donor profile, view your donation history, and see the lives you've touched.",
        image: "/screenshots/profile.png",
        icon: User,
        color: "bg-green-100 text-green-600",
        gradient: "from-green-500/20 to-emerald-500/20",
        alt: "Blood Donor Profile Management - Track Blood Donation History India",
    },
];

export function AppShowcase() {
    return (
        <section id="features" className="py-24 bg-white overflow-hidden" aria-labelledby="features-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-50 rounded-full"
                    >
                        App Walkthrough - Blood Donation Features
                    </motion.span>
                    <motion.h2
                        id="features-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Designed for <span className="text-red-600">Speed & Simplicity</span>
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the OneDrop Blood Donation App. Built to connect lives in seconds across India.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                        >
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex-1 text-center lg:text-left"
                            >
                                <div className={`inline-flex p-4 rounded-2xl mb-8 ${feature.color}`} aria-hidden="true">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    {feature.description}
                                </p>
                            </motion.div>

                            {/* Image/Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex-1 relative group"
                            >
                                {/* Gradient Background Blob */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} rounded-full blur-3xl transform scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500`} aria-hidden="true"></div>

                                {/* Floating Card Container */}
                                <div className="relative mx-auto w-[300px] md:w-[340px] aspect-[9/19] transform transition-transform duration-500 hover:-translate-y-2">
                                    {/* Phone Border/Shadow */}
                                    <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden">
                                        {/* Screen Content */}
                                        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                                            <Image
                                                src={feature.image}
                                                alt={feature.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index < 2}
                                                loading={index < 2 ? "eager" : "lazy"}
                                            />
                                        </div>
                                    </div>

                                    {/* Reflection/Glare Effect */}
                                    <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/10 pointer-events-none" aria-hidden="true"></div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
