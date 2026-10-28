'use client';

import React from 'react';
import Project from '@/components/common/Project';
import projectInterface from '@/types/projects.md';
import { ScrollTiltedTile } from '@/components/ui/scroll-tilted-grid';


export default function ProjectsSection({ projects }: { projects: projectInterface[] }) {
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
