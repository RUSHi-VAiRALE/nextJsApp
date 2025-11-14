'use client'
import { useState, useEffect } from 'react'
import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import { FaSearch, FaTimes } from "react-icons/fa"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '@/firebase'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [galleryImages, setGalleryImages] = useState([])
  const [loading, setLoading] = useState(true)

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'events', name: 'Events' },
    { id: 'campus', name: 'Campus' },
    { id: 'students', name: 'Students' }
  ]

  // Fetch gallery images from Firebase
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const galleryCollection = collection(db, 'gallery')
        const snapshot = await getDocs(galleryCollection)

        if (!snapshot.empty) {
          const imagesData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          setGalleryImages(imagesData)
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryImages()
  }, [])

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      <AboutHero route="Home" page="Gallery" />

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Take a visual tour of our classrooms, events, and student activities at CLATians.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-md'
                  : 'bg-white hover:bg-gray-50 text-gray-700'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <>
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredImages.map(image => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.category}</p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaSearch className="text-gray-700" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state if no images match the filter */}
              {filteredImages.length === 0 && !loading && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No images found in this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-6 right-0 text-white hover:text-[#ad4a16] transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>

            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}