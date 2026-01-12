import React from 'react'

export default function ReviewsSection() {
    return (
        <section className='min-h-screen w-full flex flex-col justify-start items-start'>
            <div className="flex flex-col justify-start items-center w-full gap-4 text-center overflow-hidden">
                <h1 className="hero-title text-4xl md:text-7xl xl:text-9xl text-white font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">SEE WHY MY</h1>
                <h1 className="hero-title text-4xl md:text-7xl xl:text-9xl text-pink font-futura-condensed font-extrabold leading-6 md:leading-14 xl:leading-26">CLIENTS CHOSE ME</h1>

                <h4 className="hero-subtitle mt-2 text-md md:text-xl text-gray-400 font-futura-medium w-[70%] md:w-1/2 text-center leading-6 md:leading-8">
                    Long-term partnerships. Proven impact. See why they choose us to bring their digital ambitions to life and deliver the results that matter.
                </h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                
            </div>
        </section>
    )
}
