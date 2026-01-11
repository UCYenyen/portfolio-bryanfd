import React from 'react';
import { Smile } from 'lucide-react'; // Pastikan install lucide-react atau ganti dengan icon lain
import Link from 'next/link';
export default function Footer() {
    const navLinks = [
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
    ];
    return (
        <footer className="bg-gray text-white w-full px-6 py-12 md:px-12 md:py-20 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold font-futura-condensed uppercase leading-[0.9] tracking-tight mb-8">
                                {"Let's Work"} <br />
                                <span className="flex items-center gap-2 md:gap-4">
                                    Together
                                    <span className="bg-pink-300 rounded-full p-1 md:p-2 inline-flex items-center justify-center text-black">
                                        <Smile size={48} className="w-8 h-8 md:w-12 md:h-12" strokeWidth={2.5} />
                                    </span>
                                </span>
                            </h2>
                        </div>

                        <div className="mt-8">
                            <Link href="/works" className="mt-8 bg-green px-4 py-2 self-start text-gray rounded-full font-bold text-xl font-futura-condensed hover:underline">
                                {"LET'S TALK"}
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 grid grid-cols-2 gap-5 md:gap-10">
                        <div>
                            <h3 className="text-white font-bold uppercase mb-6 font-futura-condensed tracking-wider text-2xl">Explore</h3>
                            <ul className="space-y-3 text-gray-400 font-futura-medium text-lg">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 inline-block">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className='overflow-x-hidden'>
                                <h3 className="text-white font-bold uppercase mb-6 font-futura-condensed tracking-wider text-2xl">Say Hello</h3>
                                <a href="tel:+628123187161" className="block text-gray-400 hover:text-white mb-2 font-futura-medium">
                                    +62 812-318-7161
                                </a>
                                <a href="mailto:bryanfernandodinata@gmail.com" className="block text-gray-400 hover:text-white font-futura-medium border-b border-gray-600 pb-1 overflow-ellipsis">
                                    bryanfernandodinata@gmail.com
                                </a>
                            </div>

                            {/* <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6 text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
                        <p>&copy; 2026 BRYAN FERNANDO DINATA</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="hover:text-white underline decoration-gray-600 hover:decoration-white">Accessibility Statement</a>
                        <a href="#" className="hover:text-white underline decoration-gray-600 hover:decoration-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white underline decoration-gray-600 hover:decoration-white">Cookie Policy</a>
                        <a href="#" className="hover:text-white underline decoration-gray-600 hover:decoration-white">Manage Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}