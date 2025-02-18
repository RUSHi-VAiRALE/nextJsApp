export default function ExperienceSection() {
  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We're <span className="text-primary">Experienced</span> in Online Education
            </h2>
            <p className="text-gray-600 mb-4">
              With years of expertise in providing world-class education, we have helped thousands of students
              succeed in their careers.
            </p>
            <p className="text-gray-600 mb-8">
              <strong>Join us today</strong> and experience a new way of learning!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:via-orange-500 hover:to-amber-400 transition-all duration-300">
                Learn More →
              </a>
              <a href="#" className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                How it Works →
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] mx-auto">
              <img src="https://placehold.co/150x150" className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 1" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 right-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 2" />
              <img src="https://placehold.co/150x150" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 3" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 left-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 4" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] md:w-[160px] h-[130px] md:h-[160px] rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-center text-white font-bold text-lg md:text-xl shadow-xl">
                <span>25 <br/> Years Of <br/> Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 