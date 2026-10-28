'use client';

import React from 'react';
import Project from '@/components/common/Project';
import Link from 'next/link';
import projectInterface from '@/types/projects.md';
import { ScrollTiltedTile } from '@/components/ui/scroll-tilted-grid';


export default function ProjectsSection({ projects }: { projects: projectInterface[] }) {
  return (
    <section className="min-h-screen w-full flex justify-center items-center flex-col gap-4 py-20">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 gap-18 items-start">
        {projects.map((project, index) => (
          <ScrollTiltedTile
            key={index}
            side={index % 2 === 0 ? 'L' : 'R'}
            className={`w-full ${index % 2 !== 0 ? 'md:mt-24' : 'md:-mt-16'}`}
          >
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              href={`/projects/${project.href}`}
            />
          </ScrollTiltedTile>
        ))}

        <div className='flex flex-col gap-4 justify-center p-12 items-center relative w-full aspect-square bg-gray rounded-xl overflow-hidden shadow-lg' style={{ borderRadius: '0.75rem' }}>
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
