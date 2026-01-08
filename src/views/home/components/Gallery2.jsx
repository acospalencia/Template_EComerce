import { useEffect, useRef, useState } from 'react'

export const Gallery2 = () => {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png',
  ]

  const totalSlides = slides.length

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [totalSlides])

  // Move slider
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const slideWidth = slider.clientWidth
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`
  }, [currentSlide])

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl overflow-hidden relative">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            id="slider"
          >
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                className="w-full flex-shrink-0"
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center mt-5 space-x-2" id="dot-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? 'bg-black' : 'bg-black/20'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}
