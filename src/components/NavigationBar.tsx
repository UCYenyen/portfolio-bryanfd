"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function NavigationBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    let tl = gsap.timeline({ paused: true });

    // Animation for scrolled state - hanya mengubah background
    tl.to(navbar, {
      backgroundColor: "rgba(38, 38, 38, 0.95)",
      width: "55vw",
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

      // Transform navbar based on scroll position
      if (currentScrollY > 100) {
        tl.play();
      } else {
        tl.reverse();
      }

      // Clear existing timer
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }

      // Hide/show navbar based on scroll direction
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 400
      ) {
        // Scrolling down - hide navbar
        hideNavbar();
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar
        showNavbar();
      }

      // Show navbar after user stops scrolling for 1 second
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
    <nav className="fixed flex justify-center items-center w-screen overflow-hidden z-50">
      <div ref={navRef} className="w-full flex justify-between gap-1 sm:gap-4 items-center mt-4 py-4 px-8">
        <h1 className="text-white text-4xl pr-6 font-bold font-futura-condensed">BRYAN</h1>
        <div className="text-white flex gap-1 sm:gap-8 items-center justify-center">
          <Link
            className="nav-link text-xl font-bold font-futura-condensed hover:underline"
            href="#about"
          >
            ABOUT
          </Link>
          <Link
            className="nav-link text-xl font-bold font-futura-condensed hover:underline"
            href="#projects"
          >
            WORK
          </Link>
          <Link
            className="nav-link text-xl font-bold font-futura-condensed hover:underline"
            href="#projects"
          >
            SERVICES
          </Link>
          <Link
            className="nav-link text-xl font-bold font-futura-condensed hover:underline"
            href="#projects"
          >
            CAREERS
          </Link>
          <Link
            className="nav-link text-xl font-bold font-futura-condensed hover:underline"
            href="#contact"
          >
            CONTACT
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-green font-bold text-black font-bold px-6 py-2 rounded-full text-xl font-futura-condensed hover:underline">
            LET{"'"}S TALK
          </button>
        </div>
      </div>
    </nav>
  );
}
