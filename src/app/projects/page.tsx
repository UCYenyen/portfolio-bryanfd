import React from 'react'
import HeroSection from '@/components/pages/projects/HeroSection'
import ProjectsSection from '@/components/pages/projects/ProjectsSection'

export default function page() {
    return (
        <main className="overflow-hidden flex flex-col gap-24">
            <HeroSection />
            <ProjectsSection></ProjectsSection>
        </main>
    )
}
