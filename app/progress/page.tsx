import Image from 'next/image'
import { useState } from 'react'

// ... existing code ...

  // Calculate optimal image dimensions for modal
  const getModalImageDimensions = (image: { width: number, height: number }) => {
    if (typeof window === 'undefined') return { width: '100%', height: '100%' }
    
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const infoHeight = 80 // Fixed height for info panel
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

// ... existing code ...

      {/* Updated Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black z-50 flex flex-col"
          onClick={() => setSelectedImage(null)}
        >
          <div className="h-20 bg-black/80 flex justify-between items-center px-4">
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

// ... existing code ...