'use client';

import React, { useRef } from 'react';
import Project from '@/components/common/Project';
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
      description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. This week-long orientation program aims to welcome and introduce freshmen to campus life, academic culture, and various extracurricular activities. Through engaging sessions, interactive workshops, and fun social events, O-WEEK 2025 helps new students build connections, develop essential skills, and feel a sense of belonging within the university community."
    },
    {
      title: "ENTHUSIAST RUN",
      imageUrl: "/images/projects/enthusiast-project.webp",
      description: "Enthusiast Run is a thrilling running event designed for fitness enthusiasts and athletes of all levels. This event offers participants the opportunity to challenge themselves, improve their endurance, and connect with like-minded individuals who share a passion for running"
    },
    {
      title: "NPLC 2025",
      imageUrl: "/images/projects/nplc-project.webp",
      description: "NPLC 2025 (National Programming and Logic Competition) is an annual coding competition that brings together talented programmers from across the nation. The event aims to foster problem-solving skills, logical thinking, and coding proficiency among participants through a series of challenging programming tasks and algorithmic challenges."
    },
    {
      title: "RECTORCUP 2026",
      imageUrl: "/images/projects/rectorcup-project.webp",
      description: "RectorCup 2026 is an annual sports competition held among universities, fostering camaraderie and healthy competition among students. The event features a variety of sports disciplines, encouraging teamwork, sportsmanship, and physical fitness."
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
    {
      title: "DARKNESS EVOLUTION",
      imageUrl: "/images/projects/darknessevo.svg",
      description: "Darkness Evolution is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm."
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
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-18 items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ willChange: 'transform, opacity' }}
            className={`project-card w-full`}
          >
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}