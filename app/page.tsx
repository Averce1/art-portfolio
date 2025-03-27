import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Isaac Young</h1>
          <p className="text-xl md:text-2xl mb-8">Artist & Photographer</p>
          <div className="space-x-4">
            <Link 
              href="/art" 
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              View Art
            </Link>
            <Link 
              href="/photography" 
              className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              View Photography
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Art */}
            <div className="relative h-[400px] group">
              <Image
                src="/featured-art.jpg"
                alt="Featured Art"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <Link href="/art" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Art Collection
                </Link>
              </div>
            </div>
            {/* Featured Photography */}
            <div className="relative h-[400px] group">
              <Image
                src="/featured-photo.jpg"
                alt="Featured Photography"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <Link href="/photography" className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Photography Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 