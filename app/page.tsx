'use client'

import Image from 'next/image'
import Link from 'next/link'

const sections = [
  {
    title: "Photography",
    description: "Capturing moments through the lens",
    images: [
      {
        src: "/photography/Isaac_Young_Studio_Broad-2.jpg",
        alt: "Studio Portrait",
      },
      {
        src: "/photography/IsaacYoung_Photomerge_Sunset.jpg",
        alt: "Sunset Panorama",
      },
      {
        src: "/photography/Isaac_Young_SutterSpeed_Freeze.JPG",
        alt: "Motion Freeze",
      },
      {
        src: "/photography/IMG_3798.JPG",
        alt: "Urban Scene",
      }
    ],
    link: "/photography"
  },
  {
    title: "Art",
    description: "Digital and traditional artwork",
    images: [
      {
        src: "/art/placeholder1.jpg",
        alt: "Digital Art 1",
      },
      {
        src: "/art/placeholder2.jpg",
        alt: "Digital Art 2",
      },
      {
        src: "/art/placeholder3.jpg",
        alt: "Traditional Art 1",
      },
      {
        src: "/art/placeholder4.jpg",
        alt: "Traditional Art 2",
      }
    ],
    link: "/art"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Isaac Young</h1>
          <p className="text-gray-600">Photographer & Digital Artist</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </div>

              <Link 
                href={section.link}
                className="block group"
              >
                <div className="grid grid-cols-2 gap-3 mb-4 aspect-square max-w-md mx-auto">
                  {section.images.map((image, index) => (
                    <div 
                      key={image.alt}
                      className="relative aspect-square overflow-hidden bg-gray-100 rounded-md"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 border-2 border-black rounded-md text-sm font-semibold hover:bg-black hover:text-white transition-colors">
                    View {section.title} Gallery
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 