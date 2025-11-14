import AboutHero from "@/components/AboutHero"
import BlogCategories from "@/components/blog/BlogCategories"
import FeaturedBlog from "@/components/blog/FeaturedBlog"

export const metadata = {
  title: 'CLATians Blog – CLAT & Law Entrance Exam Tips in Patna, Bihar | CLAT Coaching Institute',
  description: 'Stay ahead with the latest legal education articles, current affairs updates & exam-prep advice from Patna\'s leading CLAT coaching institute. CLATians (Boring Road, Patna, Bihar) provides expert guidance for CLAT, AILET & other law entrance exams.',
  keywords: 'CLAT blog, law entrance tips, current affairs, legal education, exam preparation',
  openGraph: {
    title: 'CLATians Blog – CLAT & Law Entrance Exam Tips in Patna, Bihar | CLAT Coaching Institute',
    description: 'Stay ahead with the latest legal education articles, current affairs updates & exam-prep advice from Patna\'s leading CLAT coaching institute. CLATians (Boring Road, Patna, Bihar) provides expert guidance for CLAT, AILET & other law entrance exams.',
    url: 'https://www.clatians.in/blogs',
    siteName: 'CLATians',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLATians Blog – CLAT & Law Entrance Exam Tips in Patna, Bihar | CLAT Coaching Institute',
    description: 'Stay ahead with the latest legal education articles, current affairs updates & exam-prep advice from Patna\'s leading CLAT coaching institute. CLATians (Boring Road, Patna, Bihar) provides expert guidance for CLAT, AILET & other law entrance exams.',
  },
}

export default function Blogs() {
    return (
        <>
            <BlogCategories />
        </>
    )
}
