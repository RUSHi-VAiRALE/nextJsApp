'use client'
import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const faqs = [
    { 
      index: 0,
      question: "What is CLATians coaching known for?",
      answer: "CLATians is the best CLAT coaching institute in Patna, offering structured courses for CLAT, AILET, CUET, and other law entrance exams."
    },
    {
      index: 1,
      question: "How does the coaching help students succeed?",
      answer: "We provide expert mentorship, structured courses, and practice tests to prepare students for top NLUs and law schools."
    },
    {
      index: 2,
      question: "What is the admission process like?",
      answer: "Admissions are open to all students who meet the eligibility criteria. The process includes an entrance exam, personal interview, and a review of academic records."
    },
    {
      index: 3,
      question: "What are the available course options?",
      answer: "We offer comprehensive courses for various law entrance exams including CLAT, AILET, and CUET. Each course is tailored to the specific exam requirements."
    },
    
    // Add more FAQs...
  ]

  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md inline-block">
            FREQUENTLY
          </span>{' '}
          ASKED QUESTIONS
        </h2>

        <div className="grid grid-cols-1 gap-5 max-w-6xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.index}
              className={`w-full border-2 border-transparent rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredIndex === faq.index ? 'transform scale-102 shadow-xl' : ''
              }`}
              style={{
                backgroundImage: `linear-gradient(white, white), ${
                  hoveredIndex === faq.index 
                    ? 'linear-gradient(to right, #f59e0b, #ea580c, #dc2626)' 
                    : 'linear-gradient(to right, #fbbf24, #ea580c, #b91c1c)'
                }`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
              onMouseEnter={() => setHoveredIndex(faq.index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                className={`w-full flex justify-between items-center pl-6 text-left min-h-[4rem] transition-colors duration-300 ${
                  hoveredIndex === faq.index ? 'bg-orange-50' : ''
                }`}
                onClick={() => setActiveIndex(activeIndex === faq.index ? null : faq.index)}
              >
                <span className={`font-semibold flex items-center pr-4 transition-colors duration-300 ${
                  hoveredIndex === faq.index ? 'text-orange-600' : ''
                }`}>
                  <i className={`bi bi-question-circle mr-2 flex-shrink-0 transition-colors duration-300 ${
                    hoveredIndex === faq.index ? 'text-red-500' : 'text-orange-500'
                  }`}></i>
                  {faq.question}
                </span>
                <i className={`bi bi-chevron-down transition-all pr-6 duration-300 flex-shrink-0 ${
                  activeIndex === faq.index ? 'rotate-180' : ''
                } ${
                  hoveredIndex === faq.index ? 'text-red-500' : ''
                }`}></i>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === faq.index ? 'max-h-40' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-gray-600 pt-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}