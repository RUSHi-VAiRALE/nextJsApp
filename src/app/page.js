import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Features from '@/components/Features'
import CourseCards from '@/components/CourseCards'
import dynamic from 'next/dynamic'
import Milestones from '@/components/Milestones'
import AppDownload from '@/components/AppDownload'
import FAQ from '@/components/FAQ'
import SocialMedia from '@/components/SocialMedia'
import LearningResources from '@/components/LearningResources'

// Lazy load components that are below the fold
const ExploreTopCourses = dynamic(() => import('@/components/ExploreTopCourses'), {
  loading: () => <div className="py-12 flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
})

const StudentTestimonials = dynamic(() => import('@/components/StudentTestimonials'), {
  loading: () => <div className="py-12 bg-[#e7edff] flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
})

const TeacherSection = dynamic(() => import('@/components/TeacherSection'), {
  loading: () => <div className="py-12 bg-[#e7edff] flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
})

const BlogSection = dynamic(() => import('@/components/BlogSection'), {
  loading: () => <div className="py-12 bg-[#e7edff] flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
})

const Events = dynamic(() => import('@/components/Events'), {
  loading: () => <div className="py-12 bg-[#e7edff] flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
  </div>
})

const AlternatingCarousel = dynamic(() => import('@/components/AlternatingCarousel'))

export const metadata = {
  title: 'Best CLAT Coaching in Patna, Bihar – CLATians | Law Entrance Institute',
  description: 'CLATians offers the best CLAT & law entrance coaching in Patna, Bihar. Get expert guidance, mock tests & current affairs prep to crack CLAT / AILET / CUET and more.',
  keywords: 'CLAT coaching Patna, law entrance coaching Bihar, best CLAT institute Patna, AILET coaching, CUET law coaching',
  openGraph: {
    title: 'Best CLAT Coaching in Patna, Bihar – CLATians | Law Entrance Institute',
    description: 'CLATians offers the best CLAT & law entrance coaching in Patna, Bihar. Get expert guidance, mock tests & current affairs prep to crack CLAT / AILET / CUET and more.',
    url: 'https://www.clatians.in',
    siteName: 'CLATians',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best CLAT Coaching in Patna, Bihar – CLATians | Law Entrance Institute',
    description: 'CLATians offers the best CLAT & law entrance coaching in Patna, Bihar. Get expert guidance, mock tests & current affairs prep to crack CLAT / AILET / CUET and more.',
  },
}

export default function Home() {
  const faqs = [
    {
      index: 0,
      question: "What is the CLAT exam pattern for 2025?",
      answer: "CLAT 2025 follows a 2-hour computer-based test format with 150 questions across five sections: English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques. Each question carries 1 mark with a 0.25 negative marking for incorrect answers. Our coaching methodology is specifically designed to align with this latest pattern."
    },
    {
      index: 1,
      question: "When is CLAT 2025 scheduled and what are the important dates?",
      answer: "CLAT 2025 is tentatively scheduled for May 2025. The application process typically begins in January, with the exact exam date announced by the Consortium of NLUs. Our coaching institute provides timely updates on application deadlines, admit card release dates, and result announcements to ensure you never miss critical milestones."
    },
    {
      index: 2,
      question: "What is CLAT and how can I prepare effectively for it?",
      answer: "The Common Law Admission Test (CLAT) is the premier national-level entrance examination for admission to 22+ National Law Universities (NLUs) across India. Effective preparation includes mastering logical reasoning, legal reasoning, English comprehension, general knowledge, and quantitative techniques. Our specialized coaching program offers comprehensive coverage of all CLAT sections with expert guidance from top NLU alumni and legal educators."
    },
    {
      index: 3,
      question: "What exactly is the CLAT exam and why is it important for law aspirants?",
      answer: "The Common Law Admission Test (CLAT) is the unified national entrance examination for admissions to 22+ National Law Universities (NLUs) across India. It serves as the gateway to India's premier legal education institutions, testing candidates on five key areas: English Language, Current Affairs, Legal Reasoning, Logical Reasoning, and Quantitative Techniques."
    },
    {
      index: 4,
      question: "What are the basic eligibility criteria for appearing in the CLAT exam?",
      answer: "For CLAT UG (undergraduate), candidates must have completed or be appearing for their 10+2 examination with a minimum of 45% marks (40% for SC/ST/OBC/PWD categories). For CLAT PG (postgraduate), candidates must have completed or be in the final year of their LLB degree with at least 50% marks (45% for reserved categories)."
    },
    // Add more FAQs...
  ]

  const slides = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_1280.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2014/03/31/17/50/class-302116_1280.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2019/05/07/02/23/board-4184870_1280.jpg",
      alt: "Slide 3"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Hero slides={slides} height={"250px"} />
      <WhyChooseUs />
      <Features />
      <CourseCards />
      <ExploreTopCourses />
      <Milestones />
      <LearningResources />
      <StudentTestimonials />
      <TeacherSection />
      <BlogSection />
      <AppDownload />
      <Events />
      <FAQ faqs={faqs} />
      <SocialMedia />
    </main>
  )
}
