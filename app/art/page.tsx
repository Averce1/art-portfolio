import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or CMS
const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    image: "/art/abstract-harmony.jpg",
    description: "A vibrant exploration of color and form",
    category: "Abstract"
  },
  {
    id: 2,
    title: "Urban Landscape",
    image: "/art/urban-landscape.jpg",
    description: "Cityscape capturing the essence of urban life",
    category: "Landscape"
  },
  {
    id: 3,
    title: "Portrait Study",
    image: "/art/portrait-study.jpg",
    description: "Detailed study of human expression",
    category: "Portrait"
  },
  // Add more artworks as needed
]

const categories = ["All", "Abstract", "Landscape", "Portrait", "Digital", "Mixed Media"]

export default function ArtGallery() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Art Gallery</h1>
        <p className="text-gray-600 text-center mb-12">A collection of my artistic works across different mediums and styles</p>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black">
                    View Details
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p className="text-gray-600">{artwork.description}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {artwork.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 