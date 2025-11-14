import AboutHero from '@/components/AboutHero'
import ExperienceSection from '@/components/about/ExperienceSection'
import StatsSection from '@/components/about/StatsSection'
import Timeline from '@/components/about/Timeline'
import Events from '@/components/Events'
import TeacherSection from '@/components/TeacherSection'

export const metadata = {
  title: 'About Us – Best CLAT Coaching in Patna, Bihar | CLATians Institute',
  description: 'Discover why CLATians, the top CLAT & Law-Entrance coaching institute in Patna, Bihar, is trusted by thousands of aspirants. Expert faculty, proven success, comprehensive preparation for CLAT, AILET & other law exams.',
  keywords: 'about CLATians, CLAT coaching Patna, law entrance institute Bihar, best law coaching',
  openGraph: {
    title: 'About Us – Best CLAT Coaching in Patna, Bihar | CLATians Institute',
    description: 'Discover why CLATians, the top CLAT & Law-Entrance coaching institute in Patna, Bihar, is trusted by thousands of aspirants. Expert faculty, proven success, comprehensive preparation for CLAT, AILET & other law exams.',
    url: 'https://www.clatians.in/about',
    siteName: 'CLATians',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Best CLAT Coaching in Patna, Bihar | CLATians Institute',
    description: 'Discover why CLATians, the top CLAT & Law-Entrance coaching institute in Patna, Bihar, is trusted by thousands of aspirants. Expert faculty, proven success, comprehensive preparation for CLAT, AILET & other law exams.',
  },
}

export default function About() {
  return (
    <>
      <AboutHero route="Home" page="About Us" />
      <ExperienceSection />
      <StatsSection />
      <TeacherSection />
      <Events />
      <Timeline />
    </>
  )
}