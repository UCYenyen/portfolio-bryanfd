'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidEther from "@/components/common/LiquidEther";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel, SiUnity, SiPrisma, SiPostgresql, SiPhp, SiDocker, SiNginx, SiExpress, SiMongodb, SiSupabase, SiKotlin, SiAndroidstudio, SiSwift, SiPusher, SiSocketdotio } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

export default function HeaderSection() {
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

    return (
        <section ref={containerRef} className="w-full flex justify-center items-center flex-col gap-4 overflow-hidden relative z-50 bg-background">
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
                <h1 className="hero-title text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">BRYAN FERNANDO DINATA</h1>
                <h1 className="hero-title text-4xl md:text-7xl xl:text-9xl text-pink font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">CIPUTRA UNIVERSITY STUDENT</h1>
                <h1 className="hero-title text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">COMPUTER SCIENCE MAJOR</h1>

                <h4 className="hero-subtitle mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] md:w-1/2 text-center leading-6 md:leading-8">
                    Passionate about crafting seamless digital experiences from websites, applications and games as innovative solutions that captivate users worldwide.
                </h4>
            </div>

            <div className="hero-logos w-full h-full relative z-50">
                
            </div>
        </section>
    );
}