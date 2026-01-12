import React from 'react'
import HeroSection from '@/components/pages/services/HeroSection'
import ServicesSection from '@/components/pages/services/ServicesSection'
// import ReviewsSection from '@/components/pages/services/ReviewsSection'

export default function page() {
    return (
        <main className="overflow-hidden min-h-screen flex flex-col justify-center items-center gap-24">
            <HeroSection />
            <ServicesSection></ServicesSection>
            {/* <ReviewsSection></ReviewsSection> */}
        </main>
    )
}
