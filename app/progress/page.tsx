'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TimelineEntry {
  date: string
  title: string
  description: string
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  tags?: string[]
}

const timelineEntries: TimelineEntry[] = [
  {
    date: '2024-03-15',
    title: 'First Digital Portrait',
    description: 'Started exploring digital art with my first portrait study. Focused on basic forms and values.',
    images: [
      {
        src: '/timeline/first-portrait.jpg',
        alt: 'First digital portrait study',
        width: 800,
        height: 1000
      }
    ],
    tags: ['Digital Art', 'Portrait', 'Study']
  }
]

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    width: number
    height: number
  } | null>(null)

  const getModalImageDimensions = (image: { width: number, height: number }) => {
    if (typeof window === 'undefined') return { width: '100%', height: '100%' }
    
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const isMobile = screenWidth < 768
    const infoHeight = isMobile ? 0 : 80 // Only reserve space for info panel on desktop
    const maxWidth = screenWidth
    const maxHeight = screenHeight - infoHeight
    
    const imageAspectRatio = image.width / image.height
    const screenAspectRatio = maxWidth / maxHeight
    
    if (imageAspectRatio > screenAspectRatio) {
      const width = maxWidth
      const height = width / imageAspectRatio
      return { width: Math.round(width), height: Math.round(height) }
    } else {
      const height = maxHeight
      const width = height * imageAspectRatio
      return { width: Math.round(width), height: Math.round(height) }
    }
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Art Progress Timeline</h1>
        
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />
          
          {timelineEntries.map((entry, index) => (
            <div 
              key={entry.date}
              className={`relative mb-8 md:mb-16 ${
                index % 2 === 0 
                  ? 'md:pr-8 md:ml-auto md:pl-8 md:w-1/2' 
                  : 'md:pl-8 md:mr-auto md:pr-8 md:w-1/2'
              }`}
            >
              {/* Date bubble - adjusted for mobile */}
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full" />
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md ml-6 md:ml-0">
                <time className="text-sm text-gray-500 mb-2 block">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <h2 className="text-xl md:text-2xl font-bold mb-4">{entry.title}</h2>
                
                <div className="space-y-4 mb-4">
                  {entry.images.map((image) => (
                    <div 
                      key={image.src}
                      className="relative w-full aspect-[4/5] overflow-hidden rounded-lg"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      {/* View details button - only visible on desktop */}
                      <div 
                        className="absolute inset-0 bg-black/0 hidden md:flex md:opacity-0 hover:opacity-100 transition-opacity duration-200 items-center justify-center cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <button className="bg-black/75 text-white px-4 py-2 rounded-lg">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm md:text-base mb-4">{entry.description}</p>
                
                {entry.tags && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black z-50 flex flex-col"
          onClick={() => setSelectedImage(null)}
        >
          {/* Info panel - only visible on desktop */}
          <div className="h-20 bg-black/80 hidden md:flex justify-between items-center px-4">
            <div className="text-white">
              <h3 className="text-lg font-semibold">{selectedImage.alt}</h3>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="text-white p-2 hover:bg-white/10 rounded-full"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-50 md:hidden"
            aria-label="Close modal"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}