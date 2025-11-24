"use client";

import { motion } from "framer-motion";
import { Heart, Users, Shield } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* The Mission */}
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-50 rounded-full"
                        >
                            The Mission
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                        >
                            No middleman. No waiting.<br />
                            <span className="text-red-600">Just people helping people.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed"
                        >
                            OneDrop isn't a company, and it's not an NGO. It's a personal promise to the community.
                            I built this platform to strip away the red tape and connect donors directly with those in need.
                            When seconds count, you shouldn't have to fill out forms—you should be able to find help.
                        </motion.p>
                    </div>

                    {/* The Story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl transform -rotate-2 opacity-70"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Heart</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Hi, I'm <span className="font-semibold text-gray-900">Hazrat Ummar Shaikh</span>.
                                    I'm a self-taught developer from India. OneDrop is my passion project—born from the belief that technology should serve humanity first.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Every line of code was written with one goal: to make blood donation as simple as sending a text message.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600 mt-1">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Community First</h4>
                                    <p className="text-gray-600">A platform built for real people, not for profit.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600 mt-1">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Privacy Focused</h4>
                                    <p className="text-gray-600">Your data is yours. We only share what's needed to save a life.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-lg text-red-600 mt-1">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Direct Connection</h4>
                                    <p className="text-gray-600">Instant notifications to nearby donors. No delays.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
