import React from 'react'
import LogoLoop from '@/components/common/LogoLoop'
export default function ImagesSections() {
    const imageLogos = [
        { src: "/images/projects/enthusiast-project.webp", alt: "Company 1", href: "https://company1.com" },
        { src: "/images/projects/nplc-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/oweek-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/rectorcup-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/sembakobayi-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/iseko.svg", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/littlecoon.svg", alt: "Company 2", href: "https://company2.com" },
    ];

    const imageLogos2 = [
        { src: "/images/projects/rectorcup-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/oweek-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/sembakobayi-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/iseko.svg", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/enthusiast-project.webp", alt: "Company 1", href: "https://company1.com" },
        { src: "/images/projects/nplc-project.webp", alt: "Company 2", href: "https://company2.com" },
        { src: "/images/projects/littlecoon.svg", alt: "Company 2", href: "https://company2.com" },
    ];

    return (
        <section className="w-full flex flex-col gap-0 justify-center items-center bg-background p-12">
            <LogoLoop
                logos={imageLogos}
                gap={24}
                logoHeight={400}
                speed={20}
                pauseOnHover={false}
                fadeOut
                direction='right'
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
            />
            <LogoLoop
            className='mt-[-1.5rem]'
                logos={imageLogos2}
                gap={24}
                pauseOnHover={false}
                speed={20}
                logoHeight={400}
                fadeOut
                direction='left'
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
            />
        </section>
    )
}
