import React from 'react'
import Services from '@/components/common/Services'
import { BiMoney } from 'react-icons/bi'

export default function ServicesSection() {
    return (
        <section className="w-[80%] min-h-screen grid grid-cols-1 md:grid-cols-3 gap-18 items-start">
            <Services title="Service Title" description="Service Description" icon={<BiMoney />} />
            <Services title="Service Title" description="Service Description" icon={<BiMoney />} />
            <Services title="Service Title" description="Service Description" icon={<BiMoney />} />
        </section>
    )
}
