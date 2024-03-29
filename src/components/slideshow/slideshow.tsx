import { useState, useEffect } from "react"
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import type { MainHero } from "../../pages/home/Home"

interface SlideshowProps {
    slides: MainHero[]
}

export function Slideshow({ slides }: SlideshowProps) {

    const [currentSlide, setCurrentSlide] = useState(1)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide < slides.length ? prevSlide + 1 : 1))
    }
    // const prevSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : slides.length))
    // }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <div className="relative overflow-x-hidden">
            <div
                className="w-full flex transition-transform duration-1000"
                style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 overflow-hidden text-center">
                        <div className="relative">
                            <img src={slide.photo} alt={`${slide.type} slide`} className="w-full h-[50rem] object-cover" />
                            <div className="absolute top-1/3 sm:top-1/2 right-0 left-0 flex justify-center ">
                                <div className="flex flex-col">
                                    <div className="uppercase text-5xl tracking-[0.5rem] font-light bg-neutral-100/75 py-10 px-40 -mt-10">{slide.type} services</div>
                                    <div className="uppercase text-4xl bg-black text-white text-center py-5 flex flex-col justify-center items-center">
                                        <p className="text-2xl">insured | certified</p>
                                        <p className="font-bold">HABE <span className="font-light">•</span> MBE <span className="font-light">•</span> HUB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
            {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
                <ChevronLeftIcon 
                    onClick={prevSlide}
                    className="w-10 h-10 text-neutral-200 cursor-pointer hover:brightness-125 transition-all duration-75 ease-in"
                />

                <ChevronRightIcon 
                    onClick={nextSlide}
                    className="w-10 h-10 text-neutral-200 cursor-pointer hover:brightness-125 transition-all duration-75 ease-in"
                />
            </div> */}
        </div>
        <div className="w-full flex justify-center gap-1 pt-1">
            {slides.map((_, index) => {
                return (
                    <div className={`w-3 h-3 rounded-full ${currentSlide === (index + 1) ? "bg-blue-500" : "bg-neutral-600"}`}></div>
                )
            })}
        </div>
        </>
    )
}