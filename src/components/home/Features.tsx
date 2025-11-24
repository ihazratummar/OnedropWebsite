"use client";

import { motion } from "framer-motion";
import { Droplet, Heart, Clock, ShieldCheck, Wallet, HelpCircle } from "lucide-react";

const features = [
    {
        icon: Droplet,
        title: "Request Blood Easily",
        description: "Post a blood request in seconds and get connected with nearby donors.",
    },
    {
        icon: Heart,
        title: "Become a Donor",
        description: "Register as a blood donor and help those in need when you can.",
    },
    {
        icon: Clock,
        title: "Quick & Reliable",
        description: "Find the right donor or recipient without long waiting times.",
    },
    {
        icon: ShieldCheck,
        title: "Safe & Secure",
        description: "Your personal details are kept private, and only essential information is shared.",
    },
    {
        icon: Wallet,
        title: "Free to Use",
        description: "OneDrop is completely free, with no hidden charges.",
    },
    {
        icon: HelpCircle,
        title: "Help Center & FAQs",
        description: "Get answers to common questions about blood donation and app usage.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Use OneDrop?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A quick, reliable, and secure way to find blood donors and save lives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-red-50 rounded-full text-red-600">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
