"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NavigationBar() {
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const scrollTimer = useRef<NodeJS.Timeout | null>(null);
    const navLinks = [
        { label: "PROJECTS", href: "/projects" },
        { label: "SERVICES", href: "/services" },
    ];

    useEffect(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(navbar, {
            backgroundColor: "rgba(38, 38, 38, 0.95)",
            width: window.innerWidth < 768 ? "80vw" : "55vw",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
            ease: "power2.out",
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
            if (!isHidden) {
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

            if (currentScrollY > 100) {
                tl.play();
            } else {
                tl.reverse();
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
            tl.kill();
        };
    }, []);

    return (
        <nav className="fixed flex justify-center items-center w-screen overflow-hidden z-100">
            <div ref={navRef} className="w-full flex justify-between gap-1 sm:gap-4 items-center mt-4 py-4 px-8">
                <Link href={"/"} className="text-white text-3xl md:text-4xl pr-6 font-bold font-futura-condensed">BRYAN</Link>
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
                    <button className="bg-green font-bold text-black px-6 py-2 rounded-full text-xl font-futura-condensed hover:underline">
                        LET{"'"}S TALK
                    </button>
                </div>
                <div className="flex md:hidden flex-col gap-1">
                    <div className="w-8 h-1 bg-white rounded"></div>
                    <div className="w-8 h-1 bg-white rounded"></div>
                    <div className="w-8 h-1 bg-white rounded"></div>
                </div>
            </div>
        </nav>
    );
}
