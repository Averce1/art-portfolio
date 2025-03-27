import Image from 'next/image'

// This would typically come from a database or CMS
const photos = [
  {
    id: 1,
    title: "Photo 1",
    image: "/photography/photo1.jpg",
    description: "Description of photo 1"
  },
  {
    id: 2,
    title: "Photo 2",
    image: "/photography/photo2.jpg",
    description: "Description of photo 2"
  },
  // Add more photos as needed
]

export default function PhotographyGallery() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Photography Gallery</h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid group">
              <div className="relative">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={800}
                  height={600}
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-xl font-semibold">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 