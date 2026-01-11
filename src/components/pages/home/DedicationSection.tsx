'use client'
import React, { useRef } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DedicationSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "restart none restart none",
            }
        });

        tl.from(".title", {
            y: 200,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            skewY: 7,
            transformOrigin: "left top"
        })
            .from(".sub-title", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")
            .from(".arrow", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            }, "-=0.8");

    }, { scope: containerRef });
    return (
        <section ref={containerRef} className="w-full min-h-screen flex justify-center items-center flex-col gap-4 relative overflow-hidden bg-background">
            <div className="flex flex-col justify-center items-center w-fit gap-4 text-center py-24 relative">
                <FaArrowDownLong className='absolute top-0 right-0 text-green w-12 md:w-18 h-auto rotate-45 arrow' />
                <FaArrowDownLong className='absolute top-0 left-0 text-green w-12 md:w-18 h-auto -rotate-45 arrow' />
                <FaArrowDownLong className='absolute bottom-0 right-0 text-green w-12 md:w-18 h-auto rotate-135 arrow' />
                <FaArrowDownLong className='absolute bottom-0 left-0 text-green w-12 md:w-18 h-auto -rotate-135 arrow' />
                <h1 className="text-3xl md:text-6xl xl:text-8xl text-white font-futura-condensed font-extrabold leading-6 md:leading-10 xl:leading-20 title">DEDICATED TO DELIVER RESULTS</h1>
                <h1 className="text-3xl md:text-6xl xl:text-8xl text-white font-futura-condensed font-extrabold leading-6 md:leading-10 xl:leading-20 title">DEVOTED TO YOUR SUCCESS</h1>
                <h4 className="mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] text-center leading-8 sub-title">Collaboration is at the core of everything we do. Your goals shape the strategy, drive our creative innovation, and define success at every stage.</h4>
            </div>
        </section>
    )
}
