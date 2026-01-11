import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "404 - Not Found",
    description: "The page you are looking for does not exist.",
}
export default function NotFound() {
    return (
        <main className="overflow-hidden  min-h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-center text-white font-futura-condensed">404 - Page Not Found</h1>
            <p className="text-center mt-4 text-gray-400 font-futura-regular">Sorry, the page you are looking for does not exist.</p>
        </main>
    )
}
