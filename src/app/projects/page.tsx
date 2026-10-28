import React from 'react'
import HeroSection from '@/components/pages/projects/HeroSection'
import ProjectsSection from '@/components/pages/projects/ProjectsSection'
import { getProjects } from '@/lib/projects'

export const revalidate = 60

export default async function page() {
    const projects = await getProjects()
    return (
        <main className="overflow-hidden flex flex-col gap-24">
            <HeroSection />
            <ProjectsSection projects={projects} />
        </main>
    )
}
