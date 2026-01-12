"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NavigationBar() {
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const scrollTimer = useRef<NodeJS.Timeout | null>(null);
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuOpenRef = useRef(false);

    const navLinks = [
        { label: "PROJECTS", href: "/projects" },
        { label: "SERVICES", href: "/services" },
    ];

    const toggleMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        menuOpenRef.current = newState;

        const navbar = navRef.current;
        if (navbar) {
            if (newState) {
                gsap.to(navbar, {
                    backgroundColor: "rgba(38, 38, 38, 0.95)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                if (window.scrollY < 100) {
                    gsap.to(navbar, {
                        backgroundColor: "transparent",
                        backdropFilter: "blur(0px)",
                        boxShadow: "none",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                }
            }
        }
    };

    useEffect(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        // 1. Inisialisasi MatchMedia
        const mm = gsap.matchMedia();
        
        // 2. Buat Timeline
        const tl = gsap.timeline({ paused: true });

        // 3. Gunakan MatchMedia untuk mengatur animasi responsive
        mm.add({
            // Definisi Breakpoints
            isMobile: "(max-width: 767px)",
            isDesktop: "(min-width: 768px)",
        }, (context) => {
            // Ambil kondisi saat ini
            const { isMobile } = context.conditions as { isMobile: boolean };

            // PENTING: Clear timeline lama sebelum mengisi yang baru agar tidak tumpuk saat resize
            tl.clear(); 

            // Set animasi dengan width dinamis berdasarkan isMobile
            tl.to(navbar, {
                backgroundColor: "rgba(38, 38, 38, 0.95)",
                // Jika Mobile 80vw, Jika Desktop 55vw (Responsif Real-time)
                width: isMobile ? "80vw" : "55vw", 
                backdropFilter: "blur(12px)",
                borderRadius: "24px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                duration: 0.3,
                ease: "power2.out",
            });
        });

        let isHidden = false;

        const showNavbar = () => {
            if (isHidden) {
                isHidden = false;
                gsap.to(navbar, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        const hideNavbar = () => {
            if (!isHidden && !menuOpenRef.current) {
                isHidden = true;
                gsap.to(navbar, {
                    y: -300,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 || menuOpenRef.current) {
                tl.play();
            } else {
                if (!menuOpenRef.current) {
                    tl.reverse();
                }
            }

            if (scrollTimer.current) {
                clearTimeout(scrollTimer.current);
            }

            if (
                currentScrollY > lastScrollY.current &&
                currentScrollY > 400
            ) {
                hideNavbar();
            } else if (currentScrollY < lastScrollY.current) {
                showNavbar();
            }

            scrollTimer.current = setTimeout(() => {
                showNavbar();
            }, 1000);

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimer.current) {
                clearTimeout(scrollTimer.current);
            }
            // Revert MatchMedia & Kill Timeline saat unmount
            mm.revert();
            tl.kill();
        };
    }, []);

    return (
        <nav className="fixed flex justify-center items-start pt-4 w-screen overflow-hidden z-100 min-h-[100px]">
            <div 
                ref={navRef} 
                className="w-full flex flex-col items-center py-4 px-8 transition-[height] duration-300 ease-out"
            >
                <div className="w-full flex justify-between gap-1 sm:gap-4 items-center">
                    <Link href={"/"} className="text-white text-3xl md:text-4xl pr-6 font-bold font-futura-condensed">
                        BRYAN
                    </Link>
                    
                    <div className="text-white gap-1 hidden md:flex sm:gap-8 items-center justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                className="nav-link text-xl font-bold font-futura-condensed hover:underline"
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="items-center hidden md:flex justify-center">
                        <Link href="https://wa.me/6281231847161" target="_blank" className="bg-green font-bold text-black px-6 py-2 rounded-full text-xl font-futura-condensed hover:underline">
                            LET{"'"}S TALK
                        </Link>
                    </div>

                    <div 
                        className="flex md:hidden flex-col gap-1 cursor-pointer p-2"
                        onClick={toggleMenu}
                    >
                        <div className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-8 h-1 bg-white rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="flex md:hidden flex-col items-center gap-6 mt-8 w-full pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                className="text-white text-xl font-bold font-futura-condensed tracking-wider"
                                href={link.href}
                                onClick={toggleMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link 
                            href="https://wa.me/6281231847161" 
                            target="_blank" 
                            className="bg-green font-bold text-black px-8 py-2 rounded-full text-xl font-futura-condensed mt-2"
                            onClick={toggleMenu}
                        >
                            LET{"'"}S TALK
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}