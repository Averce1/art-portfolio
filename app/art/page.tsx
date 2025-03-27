import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or CMS
const artworks = [
  {
    id: 1,
    title: "Artwork 1",
    image: "/art/artwork1.jpg",
    description: "Description of artwork 1"
  },
  {
    id: 2,
    title: "Artwork 2",
    image: "/art/artwork2.jpg",
    description: "Description of artwork 2"
  },
  // Add more artworks as needed
]

export default function ArtGallery() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Art Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group">
              <div className="relative h-[400px] mb-4">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
              <p className="text-gray-600">{artwork.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 