import Image from 'next/image'

export default function CourseCards() {
  return (
    <section className="bg-[#e7edff] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Online Courses Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="CLATians Logo"
                  width={120}
                  height={120}
                  className="w-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['CLAT', 'CLAT + AILET', 'CUET-LAW', 'OLET', 'CLAT + OLET', 'Mock Test Series'].map((course) => (
                  <button
                    key={course}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <button className="w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explore Online Courses
              </button>
            </div>
          </div>

          {/* Offline Courses Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="CLATians Logo"
                  width={120}
                  height={120}
                  className="w-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {['CLAT', 'CLAT + AILET', 'CUET-LAW (UG)', 'CUET-LAW (PG)', 'AIL-LET', 'BOOSTER Courses'].map((course) => (
                  <button
                    key={course}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <button className="w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explore Offline Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 