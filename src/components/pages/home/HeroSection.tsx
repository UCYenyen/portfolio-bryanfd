'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoLoop from '@/components/common/LogoLoop';
import LiquidEther from "@/components/common/LiquidEther";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiPython, SiScikitlearn, SiPandas, SiPrisma, SiPostgresql, SiPhp, SiDocker, SiNginx, SiExpress, SiMongodb, SiSupabase, SiKotlin, SiAndroidstudio, SiSwift, SiPusher, SiSocketdotio } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                toggleActions: "restart none restart none",
            }
        });

        tl.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 7,
            transformOrigin: "left top"
        })
            .from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
            .from(".hero-logos", {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            }, "-=0.8");

    }, { scope: containerRef });

    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
        { node: <SiPython />, title: "Python", href: "https://www.python.org" },
        { node: <SiScikitlearn />, title: "scikit-learn", href: "https://scikit-learn.org" },
        { node: <SiPandas />, title: "pandas", href: "https://pandas.pydata.org" },
        { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
        { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiNginx />, title: "Nginx", href: "https://www.nginx.com" },
        { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
        { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
        { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
        { node: <SiAndroidstudio />, title: "Android Studio", href: "https://developer.android.com/studio" },
        { node: <SiSwift />, title: "Swift", href: "https://swift.org" },
        { node: <SiPusher />, title: "Pusher", href: "https://pusher.com" },
        { node: <SiSocketdotio />, title: "Socket.io", href: "https://socket.io" },
    ];

    return (
        <section ref={containerRef} className="min-h-screen w-full flex justify-center items-center flex-col gap-4 overflow-hidden relative z-50 bg-background">
            <div className="absolute top-0 left-0 w-screen h-full">
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                    <LiquidEther
                        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                        mouseForce={50}
                        cursorSize={100}
                        isViscous={false}
                        viscous={60}
                        iterationsViscous={128}
                        iterationsPoisson={128}
                        resolution={0.5}
                        isBounce={true}
                        autoDemo={true}
                        autoSpeed={0.025}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={0}
                        autoRampDuration={0}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-[80vh] w-full gap-4 text-center overflow-hidden">
                <h1 className="flex flex-col items-center gap-4">
                    <span className="block hero-title text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">HELLO {"I'M BRYAN"}</span>
                    <span className="block hero-title text-4xl md:text-7xl xl:text-9xl text-pink font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">A FULLSTACK</span>
                    <span className="block hero-title text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">AI/ML DEVELOPER</span>
                </h1>

                <h4 className="hero-subtitle mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] md:w-1/2 text-center leading-6 md:leading-8">
                    Building intelligent products end to end, from machine learning models that learn from real data to the fullstack web apps that put them in front of users.
                </h4>
            </div>

            <div className="hero-logos w-full h-full relative z-50">
                <LogoLoop
                    logos={techLogos}
                    className='text-white'
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={80}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Technology partners"
                />
            </div>
        </section>
    );
}