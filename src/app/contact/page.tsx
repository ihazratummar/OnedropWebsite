"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactEmail } from "@/app/actions";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send className="w-5 h-5" />
                    Send Message
                </>
            )}
        </button>
    );
}

export default function ContactPage() {
    const [state, formAction] = useActionState(sendContactEmail, initialState);

    return (
        <div className="min-h-screen bg-gray-50 py-32 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Contact Info Side */}
                    <div className="bg-gray-900 text-white p-12 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                            <p className="text-gray-300 mb-8">
                                Have questions about the app or want to contribute? We'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <Send className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="font-medium">hazratummar9@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Form Side */}
                    <div className="p-12 md:w-2/3 bg-white relative">
                        {state.success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                    <Send className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                                <p className="text-gray-600 max-w-sm">
                                    Thanks for reaching out. I've received your message on Discord and will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form action={formAction} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                        {state.errors?.name && (
                                            <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {state.errors?.email && (
                                            <p className="text-sm text-red-500">{state.errors.email[0]}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                                        placeholder="How can we help?"
                                    />
                                    {state.errors?.subject && (
                                        <p className="text-sm text-red-500">{state.errors.subject[0]}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                    {state.errors?.message && (
                                        <p className="text-sm text-red-500">{state.errors.message[0]}</p>
                                    )}
                                </div>

                                {state.message && !state.success && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                                        {state.message}
                                    </div>
                                )}

                                <SubmitButton />
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
