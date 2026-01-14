'use client';

import React, { useRef } from 'react';
import Project from '@/components/common/Project';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "O-WEEK 2025",
      imageUrl: "/images/projects/oweek-project.webp",
      description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. Checkout the website -> https://oweek-2025-fix.vercel.app."
    },
    {
      title: "ENTHUSIAST RUN",
      imageUrl: "/images/projects/enthusiast-project.webp",
      description: "Enthusiast Run is a thrilling running event designed for fitness enthusiasts and athletes of all levels. Checkout the website -> https://enthusiastrun.com"
    },
    {
      title: "NPLC 2025",
      imageUrl: "/images/projects/nplc-project.webp",
      description: "NPLC 2025 (National Programming and Logic Competition) is an annual coding competition that brings together talented programmers from across the nation. Checkout the website -> https://nplc.vercel.app."
    },
    {
      title: "RECTORCUP 2026",
      imageUrl: "/images/projects/rectorcup-project.webp",
      description: "RectorCup 2026 is an annual sports competition held among universities, fostering camaraderie and healthy competition among students. Checkout the website -> https://rectorcupuc.com"
    },
    {
      title: "SEMBAKO BAYI PONOROGO",
      imageUrl: "/images/projects/sembakobayi-project.webp",
      description: "Sembako Bayi Ponorogo is a charitable initiative aimed at providing essential food supplies (sembako) to infants and young children in need within the Ponorogo region. This program focuses on improving the nutritional status and overall well-being of vulnerable children by distributing food packages containing staple items such as rice, milk, and other nutritious foods."
    },
    {
      title: "THE LITTLE COON",
      imageUrl: "/images/projects/littlecoon.svg",
      description: "The Little Coon is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm."
    },
    {
      title: "ISEKO : ISEKAI KONEKO",
      imageUrl: "/images/projects/iseko.svg",
      description: "Iseko : Isekai Koneko is an enchanting fantasy game that transports players to a magical world filled with adorable cat companions. Players embark on a quest to save the realm from darkness, utilizing unique abilities and forming bonds with their feline allies to overcome challenges and uncover the secrets of the isekai universe."
    },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');

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
    <section ref={containerRef} className="min-h-screen w-full flex justify-center items-center flex-col gap-4 py-20">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-18 items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ willChange: 'transform, opacity' }}
            className={`project-card w-full ${index % 2 !== 0 ? 'md:mt-24' : 'md:-mt-16'}`}
          >
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          </div>
        ))}
        
        <div className='project-card flex flex-col gap-4 justify-center p-12 items-center relative w-full aspect-square bg-gray rounded-xl overflow-hidden shadow-lg' style={{borderRadius: '0.75rem'}}>
          <h3 className='text-white font-futura-condensed font-extrabold text-4xl md:text-9xl text-start'>WANNA SEE MORE?</h3>
          <p className='text-gray-400 font-futura-medium text-sm md:text-xl'>
            Explore our portfolio and discover what we can achieve for you. {`Let's`} create something extraordinary together.
          </p>
          <Link href="/projects" className="mt-0 md:mt-8 bg-green px-4 py-2 self-start text-gray rounded-full font-bold text-lg md:text-xl font-futura-condensed hover:underline">
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  )
}