import StatsSection from "@/components/about/StatsSection";
import Timeline from "@/components/about/Timeline";
import AdmissionFAQ from "@/components/admission/AdmissionFAQ";
import AdmissionSection from "@/components/admission/AdmissionSection";
import ScholarshipBenefits from "@/components/admission/ScholarshipBenefits";
import ScholarshipDetails from "@/components/admission/ScholarshipDetails";
import ScholarshipForm from "@/components/admission/ScholarshipForm";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import ScholarshipSteps from "@/components/ScholarshipSteps";
import StudentTestimonials from "@/components/StudentTestimonials";
import AlternatingCarousel from "@/components/AlternatingCarousel";

export const metadata = {
  title: 'Scholarship & Admission | CLAT Coaching in Patna – CLATians Law Entrance Institute Bihar',
  description: 'Apply now for Scholarship & get admissions at CLATians – the premium law entrance coaching institute in Patna, Bihar. Join our CLAT / AILET / CUET (Law) batches, avail scholarships & expert guidance for top National Law Universities.',
  keywords: 'CLAT scholarship, admission CLATians Patna, law entrance coaching Bihar, CLAT coaching admission',
  openGraph: {
    title: 'Scholarship & Admission | CLAT Coaching in Patna – CLATians Law Entrance Institute Bihar',
    description: 'Apply now for Scholarship & get admissions at CLATians – the premium law entrance coaching institute in Patna, Bihar. Join our CLAT / AILET / CUET (Law) batches, avail scholarships & expert guidance for top National Law Universities.',
    url: 'https://www.clatians.in/admission',
    siteName: 'CLATians',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship & Admission | CLAT Coaching in Patna – CLATians Law Entrance Institute Bihar',
    description: 'Apply now for Scholarship & get admissions at CLATians – the premium law entrance coaching institute in Patna, Bihar. Join our CLAT / AILET / CUET (Law) batches, avail scholarships & expert guidance for top National Law Universities.',
  },
}

export default function Admission() {
    const faqs = [
    { 
      index: 0,
      question: "Scholarship Test Details",
      answer: "No. of Questions = 50 Time Duration = 50 min (For Online Test) & 60 min for (Offline Test)Timing = Online Test (24×7) & Offline Test 10:00am to 06:00pmMode of Test = Online and Offline"
    },
    {
      index: 1,
      question: "Eligibility for the Test",
      answer: "Any Candidate who want to appear for CLAT 2025/CLAT 2026."
    },
    {
      index: 2,
      question: "What are the Test Syllabus ?",
      answer: "Completely based on your Knowledge, Language and IQ. "
    },
    {
      index: 3,
      question: "What are the Subjects ?",
      answer: "Reading Comprehension – 20Q Legal Awareness – 10Q Logical Reasoning – 10Q General Awareness – 5Q General Maths – 5Q"
    },
    {
      index: 4,
      question: "Scholarship Test Benefits!",
      answer: "Upto 1o Marks – 10% Scholarship 11 to 15 Marks – 15% Scholarship 16 to 20 Marks – 20% Scholarship 21 to 25 Marks – 25% Scholarship 26 to 30 Marks – 30% Scholarship 31 to 35 Marks – 35% Scholarship 36 to 40 Marks – 40% Scholarship 41 to 45 Marks – 50% Scholarship 46 to 48 Marks – 70% Scholarship 49 to 50 Marks – 100% Scholarship"
    },
    // Add more FAQs...
  ]
    return (
        <>
            <ScholarshipForm />
            <ScholarshipBenefits />
            <StatsSection />
            <ScholarshipSteps />
            <ScholarshipDetails />
            <Timeline />
            <StudentTestimonials />
            <AlternatingCarousel />
            <Events />
        </>
    )
}
