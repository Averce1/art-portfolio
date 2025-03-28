'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

// This would typically come from a database or CMS
const photos = [
  {
    id: 1,
    title: "Studio Portrait",
    image: "/photography/Isaac_Young_Studio_Broad-2.jpg",
    description: "Professional studio portrait showcasing dramatic lighting",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 2,
    title: "Sunset Panorama",
    image: "/photography/IsaacYoung_Photomerge_Sunset.jpg",
    description: "Stunning panoramic sunset captured in perfect timing",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 3,
    title: "Motion Freeze",
    image: "/photography/Isaac_Young_SutterSpeed_Freeze.JPG",
    description: "Capturing motion in a moment of perfect stillness",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 4,
    title: "Urban Scene",
    image: "/photography/IMG_3798.JPG",
    description: "Urban landscape capturing city life",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 5,
    title: "City Perspective",
    image: "/photography/IMG_3785.JPG",
    description: "Unique perspective of urban architecture",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 6,
    title: "Street View",
    image: "/photography/IMG_3769.JPG",
    description: "Street photography capturing everyday moments",
    dimensions: { width: 2048, height: 1365 }
  }
]

interface PhotoModalProps {
  photo: typeof photos[0] | null
  onClose: () => void
}

function PhotoModal({ photo, onClose }: PhotoModalProps) {
  if (!photo) return null

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Calculate dimensions to fit screen while maintaining aspect ratio
  const aspectRatio = photo.dimensions.width / photo.dimensions.height
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const padding = 48 // Padding around modal
  const infoWidth = 320 // Width of info panel
  const infoHeight = 140 // Height of info panel for horizontal images
  const isVertical = aspectRatio < 1

  // Calculate maximum available space
  const maxViewportWidth = viewportWidth - (padding * 2)
  const maxViewportHeight = viewportHeight - (padding * 2)

  let width, height

  // For all images, use side panel layout
  const availableWidth = maxViewportWidth - infoWidth - padding // Account for info panel and gap
  const availableHeight = maxViewportHeight

  // Start by fitting to height
  height = Math.min(availableHeight, photo.dimensions.height)
  width = height * aspectRatio

  // If width is too wide, scale down based on width
  if (width > availableWidth) {
    width = availableWidth
    height = width / aspectRatio
  }

  // Final safety check to ensure it fits in viewport
  if (height > availableHeight) {
    height = availableHeight
    width = height * aspectRatio
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-12 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg overflow-hidden flex flex-row"
        style={{ 
          width: `${width + infoWidth}px`,
          maxHeight: `${maxViewportHeight}px`
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close modal"
        >
          ✕
        </button>
        
        {/* Image Container */}
        <div 
          className="relative flex items-center justify-center bg-gray-900 border-r border-gray-200"
          style={{ 
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          <Image
            src={photo.image}
            alt={photo.title}
            width={Math.round(width)}
            height={Math.round(height)}
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Info Panel */}
        <div className="w-[320px] p-6 h-full overflow-y-auto flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{photo.title}</h2>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{photo.description}</p>
          </div>
          <div className="mt-4">
            <div className="mt-3 text-sm text-gray-500">
              {photo.dimensions.width} × {photo.dimensions.height}px
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PhotographyGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Photography Gallery</h1>
        <p className="text-gray-600 text-center mb-12">A visual journey through moments captured in time</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority={photo.id <= 2}
                  quality={60}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedPhoto(photo)}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </main>
  )
} 