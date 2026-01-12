import React from 'react'
import { ServiceComponentProps } from '@/types/service.md'
import Link from 'next/link'

export default function Services( props: ServiceComponentProps ) {
  return (
    <div className='relative flex text-white flex-col gap-8 justify-start pt-16 p-12 items-center w-full bg-gray rounded-xl shadow-lg' style={{borderRadius: '0.75rem'}}>
        <h3 className={`absolute -top-6 left-8 text-background -rotate-z-2 px-4 py-2 font-futura-condensed font-bold text-4xl rounded-lg ${props.titleClassName}`}>{props.title}</h3>
        <p className="text-white text-2xl text-start w-full">{props.description}</p>
        <Link href="https://wa.me/6281231847161" target='_blank' className={`px-4 self-start py-2 font-futura-condensed font-bold text-2xl text-background rounded-lg hover:bg-gray-400 ${props.titleClassName}`}>INTERESTED</Link>
    </div>
  )
}
