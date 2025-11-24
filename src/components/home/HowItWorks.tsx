"use client";

import { motion } from "framer-motion";
import { Bell, HandHeart, Search, UserCheck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Post a Request",
        description: "Tell us what you need. It takes less than a minute to create a request.",
    },
    {
        icon: Bell,
        title: "Instant Notification",
        description: "We instantly ping all nearby donors with your blood type.",
    },
    {
        icon: UserCheck,
        title: "Connect Directly",
        description: "Donors accept your request and contact you directly. No middleman.",
    },
    {
        icon: HandHeart,
        title: "Receive Help",
        description: "Meet the donor, receive the blood, and save a life.",
    },
];

export function HowItWorks() {
    return (
        <section id="how" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Technology that bridges the gap between need and help.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-dashed border-t-2 border-gray-200 border-dashed w-[80%] mx-auto -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center relative bg-gray-50 p-4"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-red-50 text-red-600 flex items-center justify-center shadow-sm mb-6 relative z-10">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
