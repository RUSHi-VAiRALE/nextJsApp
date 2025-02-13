'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function TeacherSection() {
  // Teacher data
  const teachers = [
    {
      name: "Alexendra Scott",
      role: "CLAT Expert",
      location: "Delhi, India",
      description: "Expert in teaching Legal Reasoning and Legal Knowledge for CLAT and other law entrance exams. Over 8 years of experience in guiding students for top NLUs.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "alexendra@clatwallah.com",
      phone: "+91-98765-43210"
    },
    {
      name: "Christopher Lisa",
      role: "English Language Specialist",
      location: "Mumbai, India",
      description: "Specialized in English Language and Comprehension. Helped hundreds of students improve their reading and comprehension skills for law entrances.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "christopher@clatwallah.com",
      phone: "+91-98765-43211"
    },
    {
      name: "Emma Watson",
      role: "Current Affairs Expert",
      location: "Bangalore, India",
      description: "Current Affairs and GK specialist with deep knowledge of national and international affairs relevant to law entrance exams.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "emma@clatwallah.com",
      phone: "+91-98765-43212"
    },
    {
      name: "John Doe",
      role: "Logical Reasoning Expert",
      location: "Pune, India",
      description: "Specialized in Logical Reasoning and Analytical Skills. Known for making complex problems simple and approachable.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "john@clatwallah.com",
      phone: "+91-98765-43213"
    },
    {
      name: "Sarah Smith",
      role: "Mathematics Expert",
      location: "Chennai, India",
      description: "Mathematics and Quantitative Techniques specialist. Helps students overcome their fear of numbers with innovative teaching methods.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "sarah@clatwallah.com",
      phone: "+91-98765-43214"
    },
    {
      name: "Michael Brown",
      role: "Legal Aptitude Trainer",
      location: "Kolkata, India",
      description: "Expert in Legal Aptitude and Legal Awareness. Brings real-world legal insights into classroom teaching.",
      image: "https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg",
      email: "michael@clatwallah.com",
      phone: "+91-98765-43215"
    }
  ]

  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0])

  return (
    <section className="py-8 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">OUR</span> TEACHERS
          </h2>
          <p className="text-gray-600">Learn from the Best in Legal Education</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Selected Teacher Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-5/12">
                <div className="relative aspect-square">
                  <Image
                    src="https://cdn.pixabay.com/photo/2018/01/09/08/31/wisdom-3071110_640.jpg"
                    alt={selectedTeacher.name}
                    fill
                    className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-7/12">
                <h4 className="text-xl font-bold">{selectedTeacher.name}</h4>
                <p className="text-orange-500 font-semibold">{selectedTeacher.role}</p>
                <p className="text-gray-600 flex items-center gap-1 mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedTeacher.location}
                </p>
                <p className="my-4 text-gray-600">{selectedTeacher.description}</p>
                <div className="flex gap-4 mb-4">
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
                <div className="text-gray-600 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {selectedTeacher.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {selectedTeacher.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {teachers.map((teacher, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedTeacher(teacher)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-orange-500/50 to-red-700/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 