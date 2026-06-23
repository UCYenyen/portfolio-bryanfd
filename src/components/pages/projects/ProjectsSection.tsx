'use client';

import React from 'react';
import Project from '@/components/common/Project';
import { ScrollTiltedTile } from '@/components/ui/scroll-tilted-grid';

const projects = [
  {
    title: "O-WEEK 2025",
    imageUrl: "/images/projects/oweek-project.webp",
    description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. Checkout the website -> https://oweek-2025-fix.vercel.app.",
    href: "o-week-2025"
  },
  {
    title: "ENTHUSIAST RUN",
    imageUrl: "/images/projects/enthusiast-project.webp",
    description: "Enthusiast Run is a thrilling running event designed for fitness enthusiasts and athletes of all levels. Checkout the website -> https://enthusiastrun.com",
    href: "enthusiastrun"
  },
  {
    title: "NPLC 2025",
    imageUrl: "/images/projects/nplc-project.webp",
    description: "NPLC 2025 (National Programming and Logic Competition) is an annual coding competition that brings together talented programmers from across the nation. Checkout the website -> https://nplc.vercel.app.",
    href: "nplc"
  },
  {
    title: "RECTORCUP 2026",
    imageUrl: "/images/projects/rectorcup-project.webp",
    description: "RectorCup 2026 is an annual sports competition held among universities, fostering camaraderie and healthy competition among students. Checkout the website -> https://rectorcupuc.com",
    href: "rectorcup"
  },
  {
    title: "XCELERATE",
    imageUrl: "/images/projects/xcelerate/main-menu.webp",
    description: "XCelerate is a top down real time multiplayer word game for mobile, built by my team for the Amikom game development competition where players race to spell words.",
    href: "xcelerate"
  },
  {
    title: "NUSANTARA REBORN",
    imageUrl: "/images/projects/nusantara-reborn/main-game.webp",
    description: "Nusantara Reborn is a two dimensional nation building simulation game where the player takes over a struggling Indonesia and leads it back toward prosperity.",
    href: "nusantara-reborn"
  },
  {
    title: "THE LITTLE COON",
    imageUrl: "/images/projects/littlecoon.svg",
    description: "The Little Coon is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm.",
    href: "the-little-coon"
  },
  {
    title: "ISEKO : ISEKAI KONEKO",
    imageUrl: "/images/projects/iseko.svg",
    description: "Iseko : Isekai Koneko is an enchanting fantasy game that transports players to a magical world filled with adorable cat companions. Players embark on a quest to save the realm from darkness, utilizing unique abilities and forming bonds with their feline allies to overcome challenges and uncover the secrets of the isekai universe.",
    href: "iseko"
  },
  {
    title: "DARKNESS EVOLUTION",
    imageUrl: "/images/projects/darknessevo.svg",
    description: "Darkness Evolution is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm.",
    href: "darkness-evolution"
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-4 pb-20">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-18 items-start">
        {projects.map((project, index) => (
          <ScrollTiltedTile
            key={index}
            side={index % 2 === 0 ? 'L' : 'R'}
            className="w-full"
          >
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              href={`/projects/${project.href}`}
            />
          </ScrollTiltedTile>
        ))}
      </div>
    </section>
  )
}
