'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export function Carousel({ slides, currentSlide, setCurrentSlide, autoPlay = true, interval = 5000 }) {
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length, setCurrentSlide])

  return (
    <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0' 
              : index < currentSlide 
                ? '-translate-x-full' 
                : 'translate-x-full'
          }`}
        >
          <Image
            src="data:image/jpeg;base64,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"
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
} 