'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StackingCardProps {
  children: React.ReactNode
  index: number
  backgroundColor?: string
}

const StackingCard: React.FC<StackingCardProps> = ({ 
  children, 
  index, 
  backgroundColor = '#0a0a0a'
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    gsap.to(card, {
      scale: 1,
      scrollTrigger: {
        trigger: card,
        start: 'top top', 
        end: 'bottom top',
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    })

    return () => {
      // Clean up triggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.trigger === card && trigger.kill())
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`sticky top-0 min-h-screen w-full`}
      style={{ zIndex: index, backgroundColor, transformOrigin: 'center top' }}
    >
      {children}
    </div>
  )
}

interface StackingCardsProps {
  children: React.ReactNode[]
  className?: string
}

const StackingCards: React.FC<StackingCardsProps> = ({ children, className = '' }) => {
  const totalCards = React.Children.count(children)

  return (
    <div 
      className={`relative ${className}`}
      style={{ height: `${totalCards * 100}vh` }}
    >
      {React.Children.map(children, (child, index) => (
        <StackingCard
          key={index}
          index={index}
        >
          {child}
        </StackingCard>
      ))}
    </div>
  )
}

export default StackingCards