import { useEffect, useRef, useState } from 'react'

export const Gallery3 = () => {
  const sliderRef = useRef(null)
  const intervalRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png',
  ]

  const totalSlides = slides.length

  const goToSlide = (index) => {
    const slider = sliderRef.current
    if (!slider) return

    const slideWidth = slider.children[0].clientWidth
    slider.style.transform = `translateX(-${index * slideWidth}px)`
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
    resetAutoSlide()
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
    resetAutoSlide()
  }

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    }, 3000)
  }

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current)
    startAutoSlide()
  }

  // Move slider when slide changes
  useEffect(() => {
    goToSlide(currentSlide)
  }, [currentSlide])

  // Init autoplay + resize
  useEffect(() => {
    startAutoSlide()

    const handleResize = () => goToSlide(currentSlide)
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(intervalRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="flex items-center">
      {/* PREV */}
      <button
        onClick={prevSlide}
        className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* SLIDER */}
      <div className="w-full max-w-3xl overflow-hidden relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
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

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
