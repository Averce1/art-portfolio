'use client'

import Image from 'next/image'

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
  },
  // Add more entries as you progress
]

export default function Timeline() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Art Progress Timeline</h1>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
          
          {timelineEntries.map((entry, index) => (
            <div 
              key={entry.date}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'pr-8 md:ml-auto md:pl-8 md:w-1/2' : 'pl-8 md:mr-auto md:pr-8 md:w-1/2'
              }`}
            >
              {/* Date bubble */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full" />
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <time className="text-sm text-gray-500 mb-2 block">
                  {new Date(entry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                
                <h2 className="text-2xl font-bold mb-4">{entry.title}</h2>
                
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4">{entry.description}</p>
                
                {entry.tags && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
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
    </main>
  )
} 