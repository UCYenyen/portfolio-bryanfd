import React from 'react'
import { ServiceComponentProps } from '@/types/service.md'

export default function Services( props: ServiceComponentProps ) {
  return (
    <div className='project-card flex flex-col gap-4 justify-center p-12 items-center relative w-full aspect-square bg-gray rounded-xl overflow-hidden shadow-lg' style={{borderRadius: '0.75rem'}}>
        <div className="service-icon">{props.icon}</div>
        <h3 className="service-title">{props.title}</h3>
        <p className="service-description">{props.description}</p>
    </div>
  )
}
