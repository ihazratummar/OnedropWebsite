import Link from "next/link";
import { Github, LinkedinIcon, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">About the Developer</h3>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                            OneDrop is a personal project by <span className="text-white font-medium">Hazrat Ummar Shaikh</span>,
                            a self-taught Android & Backend developer. Built with passion to solve a real-world problem
                            using modern technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/ihazratummar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="mailto:support@onedrops.online" className="text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/hazrat-ummar-shaikh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="md:text-right flex flex-col md:items-end justify-center">
                        <div className="flex flex-wrap gap-6 justify-center md:justify-end mb-6">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
                            <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">Disclaimer</Link>
                            <Link href="/data-deletion" className="text-gray-400 hover:text-white transition-colors text-sm">Data Deletion</Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Code for good. Built with ❤️ in India.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} OneDrop. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        <a href="https://hazratdev.top" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                            hazratdev.top
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
