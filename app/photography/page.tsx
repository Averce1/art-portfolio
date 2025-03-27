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
    category: "Portrait",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 2,
    title: "Sunset Panorama",
    image: "/photography/IsaacYoung_Photomerge_Sunset.jpg",
    description: "Stunning panoramic sunset captured in perfect timing",
    category: "Landscape",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 3,
    title: "Motion Freeze",
    image: "/photography/Isaac_Young_SutterSpeed_Freeze.JPG",
    description: "Capturing motion in a moment of perfect stillness",
    category: "Action",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 4,
    title: "Urban Scene",
    image: "/photography/IMG_3798.JPG",
    description: "Urban landscape capturing city life",
    category: "Urban",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 5,
    title: "City Perspective",
    image: "/photography/IMG_3785.JPG",
    description: "Unique perspective of urban architecture",
    category: "Architecture",
    dimensions: { width: 2048, height: 1365 }
  },
  {
    id: 6,
    title: "Street View",
    image: "/photography/IMG_3769.JPG",
    description: "Street photography capturing everyday moments",
    category: "Street",
    dimensions: { width: 2048, height: 1365 }
  }
]

const categories = ["All", "Portrait", "Landscape", "Action", "Urban", "Architecture", "Street"]

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
  const padding = 32 // 16px padding on each side
  const infoWidth = 300 // Width of the info panel for vertical images
  const infoHeight = 120 // Height of the info panel for horizontal images
  const isVertical = aspectRatio < 1

  let width, height, maxWidth, maxHeight

  if (isVertical) {
    // For vertical images, account for side panel
    maxWidth = Math.min(viewportWidth - padding * 2 - infoWidth, photo.dimensions.width)
    maxHeight = Math.min(viewportHeight - padding * 2, photo.dimensions.height)
    
    height = maxHeight
    width = height * aspectRatio
    if (width > maxWidth) {
      width = maxWidth
      height = width / aspectRatio
    }
  } else {
    // For horizontal images, account for bottom panel
    maxWidth = Math.min(viewportWidth - padding * 2, photo.dimensions.width)
    maxHeight = Math.min(viewportHeight - padding * 2 - infoHeight, photo.dimensions.height)
    
    width = maxWidth
    height = width / aspectRatio
    if (height > maxHeight) {
      height = maxHeight
      width = height * aspectRatio
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`relative bg-white rounded-lg overflow-hidden flex ${isVertical ? 'flex-row' : 'flex-col'}`}
        style={{ width: isVertical ? `${width + infoWidth}px` : `${width}px` }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="relative" style={{ height: `${height}px`, width: `${width}px` }}>
          <Image
            src={photo.image}
            alt={photo.title}
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </div>
        <div className={`bg-white ${isVertical ? 'w-[300px] p-6' : 'w-full p-4'}`}>
          <h2 className="text-xl font-bold">{photo.title}</h2>
          <p className="text-gray-600 text-sm mt-2">{photo.description}</p>
          <span className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mt-3">
            {photo.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function PhotographyGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Photography Gallery</h1>
        <p className="text-gray-600 text-center mb-12">A visual journey through moments captured in time</p>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all ${
                selectedCategory === category
                ? 'border-black bg-black text-white'
                : 'border-gray-300 hover:border-black hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
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
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {photo.category}
                </span>
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