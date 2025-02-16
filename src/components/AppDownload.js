import Image from 'next/image'

export default function AppDownload() {
  return (
    <section className="bg-[#fdf6f4] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: App Image */}
          <div className="lg:w-3/5 px-8 lg:px-16">
            <Image
              src="https://clatwallah.netlify.app/images/appp.png"
              alt="Mobile App"
              width={600}
              height={700}
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-2/5 text-center lg:text-left px-4 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Download For Hassle-Free<br />
              End-To-End <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent">Learning</span>
            </h2>
            
            <p className="text-gray-600 mb-10 max-w-lg leading-relaxed text-lg">
              Access all your study materials, attend live classes,<br className="hidden md:block" />
              and track your progress with our easy-to-use mobile app.<br className="hidden md:block" />
              Available for both iOS and Android devices.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </a>
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 