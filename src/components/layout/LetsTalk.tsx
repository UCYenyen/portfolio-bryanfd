'use client'
import { useEffect, useRef } from "react";
import { RiChat1Line, RiChat1Fill } from "react-icons/ri";
import { gsap } from "gsap";

export default function LetsTalk() {
    const talkRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const el = talkRef.current;
        if (!el) return;

        // Setup Context untuk React 18+ (Best Practice)
        const ctx = gsap.context(() => {
            // Setup Awal: Set titik tumpu animasi di kanan bawah (100% 100%)
            // Supaya saat membesar, dia "tumbuh" dari pojok, bukan dari tengah.
            gsap.set(el, { 
                transformOrigin: "100% 100%", 
                scale: 0, 
                autoAlpha: 0 
            });
        });

        let isVisible = false;

        const show = () => {
            if (!isVisible) {
                isVisible = true;
                // Efek Elastic: Seperti jeli/bola karet
                gsap.to(el, { 
                    scale: 1, 
                    autoAlpha: 1, 
                    duration: 1, // Durasi sedikit lebih lama biar elastisnya kelihatan
                    ease: "elastic.out(1, 0.5)",
                    overwrite: "auto"
                });
            }
        };

        const hide = () => {
            if (isVisible) {
                isVisible = false;
                // Efek Masuk Kembali: Mengecil ke pojok dengan cepat
                gsap.to(el, { 
                    scale: 0, 
                    autoAlpha: 0, 
                    duration: 0.3, 
                    ease: "back.in(1.7)",
                    overwrite: "auto" 
                });
            }
        };

        const onScroll = () => {
            const currY = window.scrollY;
            // Logic scroll tetap sama
            if (currY > lastScrollY.current + 10) {
                show();
            } else if (currY < lastScrollY.current - 10) {
                hide();
            }
            lastScrollY.current = currY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            ctx.revert(); // Cleanup GSAP
        };
    }, []);

    // JSX di bawah ini TIDAK ADA YANG DIUBAH sama sekali dari kodemu
    return (
        <div ref={talkRef} className="fixed bottom-0 right-0 cursor-pointer hover:shadow-xl transition-shadow z-50">
            <div className="w-32 h-32 bg-green rounded-tl-full flex items-center justify-center relative">
                <RiChat1Line size={72} className="absolute top-4 -left-6 text-black z-4" />
                <RiChat1Fill size={72} className="absolute top-4 -left-6 text-white" />
                <p className="text-center text-black font-bold text-4xl mt-8 ml-8 font-futura-condensed">
                    {"LET'S"}
                    <br />
                    TALK
                </p>
            </div>
        </div>
    );
}