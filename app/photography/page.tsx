import Image from 'next/image'

// This would typically come from a database or CMS
const photos = [
  {
    id: 1,
    title: "Studio Portrait",
    image: "/photography/Isaac_Young_Studio_Broad-2.jpg",
    description: "Professional studio portrait showcasing dramatic lighting",
    category: "Portrait"
  },
  {
    id: 2,
    title: "Sunset Panorama",
    image: "/photography/IsaacYoung_Photomerge_Sunset.jpg",
    description: "Stunning panoramic sunset captured in perfect timing",
    category: "Landscape"
  },
  {
    id: 3,
    title: "Motion Freeze",
    image: "/photography/Isaac_Young_SutterSpeed_Freeze.JPG",
    description: "Capturing motion in a moment of perfect stillness",
    category: "Action"
  },
  {
    id: 4,
    title: "Urban Scene",
    image: "/photography/IMG_3798.JPG",
    description: "Urban landscape capturing city life",
    category: "Urban"
  },
  {
    id: 5,
    title: "City Perspective",
    image: "/photography/IMG_3785.JPG",
    description: "Unique perspective of urban architecture",
    category: "Architecture"
  },
  {
    id: 6,
    title: "Street View",
    image: "/photography/IMG_3769.JPG",
    description: "Street photography capturing everyday moments",
    category: "Street"
  }
]

const categories = ["All", "Portrait", "Landscape", "Action", "Urban", "Architecture", "Street"]

export default function PhotographyGallery() {
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
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={800}
                  height={600}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-2 space-y-2">
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
    </main>
  )
} 