'use client'
import React, { useRef } from 'react'
import Services from '@/components/common/Services'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);
    
    useGSAP(() => {
        const cards = gsap.utils.toArray('.service-card');

        cards.forEach((card) => {
            gsap.from(card as HTMLElement, {
                scrollTrigger: {
                    trigger: card as HTMLElement,
                    start: "top 85%", 
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
                y: 100,     
                opacity: 0, 
                duration: 1,
                ease: "power3.out"
            });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-[80%] pb-24 grid grid-cols-1 xl:grid-cols-3 gap-24 items-start">
            <div className="service-card">
                <Services 
                    title="Web Development" 
                    description="Develop responsive and dynamic websites tailored to your needs." 
                    titleClassName='bg-pink' 
                />
            </div>

            <div className="service-card">
                <Services 
                    title="App Development" 
                    description="Create user-friendly mobile applications for various platforms." 
                    titleClassName='bg-green' 
                />
            </div>

            <div className="service-card">
                <Services 
                    title="Game Development" 
                    description="Design and develop engaging and interactive games." 
                    titleClassName='bg-yellow-200' 
                />
            </div>
        </section>
    )
}