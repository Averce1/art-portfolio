'use client'

import Image from 'next/image'
import Link from 'next/link'

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/isaac.young.ap',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/isaacyoungap',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@isaac.young.ap',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    href: 'https://threads.net/@isaac.young.ap',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06c0-3.489.933-6.42 2.772-8.726C6.178 1.05 9.093 0 12.175 0c3.289 0 6.292 1.028 8.472 2.896 2.127 1.825 3.303 4.31 3.303 6.993 0 2.137-.692 4.134-1.95 5.62-1.149 1.36-2.622 2.148-4.14 2.218-1.4-.053-2.483-.489-3.23-1.297-.645.814-1.593 1.287-2.697 1.344-1.141.063-2.107-.273-2.897-1.001-.814-.748-1.278-1.837-1.387-3.238-.146-1.905.409-3.511 1.642-4.766 1.088-1.106 2.537-1.691 4.166-1.691.636 0 1.233.09 1.824.258l-.178-2.317h2.068l.625 7.905c.066.871.286 1.504.66 1.89.375.385.899.57 1.56.552.797-.037 1.437-.401 1.962-1.116.591-.807.894-1.89.894-3.206 0-1.91-.864-3.703-2.432-5.05-1.704-1.46-4.039-2.265-6.573-2.265-2.447 0-4.715.864-6.354 2.432-1.536 1.471-2.317 3.767-2.317 6.825 0 2.995.707 5.345 2.101 6.989 1.484 1.744 3.7 2.642 6.587 2.664h.007c1.835 0 3.465-.349 4.843-1.037a8.563 8.563 0 0 0 3.258-2.962l1.864 1.078c-1.016 1.747-2.379 3.106-4.053 4.038-1.7.944-3.781 1.423-6.181 1.423zm.374-12.756c-1.635 0-2.377 1.129-2.284 3.456.077 1.913.948 2.832 2.68 2.816.847-.008 1.594-.343 2.196-.986.262-.281.473-.6.628-.95l-.327-4.068c-.555-.232-1.296-.268-1.783-.268z" />
      </svg>
    ),
  },
]

const sections = [
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
  },
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
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <h1 className="text-6xl font-bold mb-6">Isaac Young</h1>
          <p className="text-gray-600 text-xl mb-8">Photographer & Digital Artist</p>
          
          <div className="flex justify-center space-x-6">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">{section.title}</h2>
                <p className="text-gray-600">{section.description}</p>
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