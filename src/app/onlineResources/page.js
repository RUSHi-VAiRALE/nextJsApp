import OnlineResources from "@/components/OnlineResources";

export const metadata = {
  title: 'Study Material & Resources for CLAT & Law Entrance Exams – CLATians Patna, Bihar',
  description: 'Access & download free study materials, practice papers, previous-year papers & reference books for CLAT, AILET and other law entrance exams. Leading CLAT coaching in Patna, Bihar – CLATians.',
  keywords: 'CLAT study material, law entrance resources, practice papers, previous year papers, CLAT preparation',
  openGraph: {
    title: 'Study Material & Resources for CLAT & Law Entrance Exams – CLATians Patna, Bihar',
    description: 'Access & download free study materials, practice papers, previous-year papers & reference books for CLAT, AILET and other law entrance exams. Leading CLAT coaching in Patna, Bihar – CLATians.',
    url: 'https://www.clatians.in/onlineResources',
    siteName: 'CLATians',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Material & Resources for CLAT & Law Entrance Exams – CLATians Patna, Bihar',
    description: 'Access & download free study materials, practice papers, previous-year papers & reference books for CLAT, AILET and other law entrance exams. Leading CLAT coaching in Patna, Bihar – CLATians.',
  },
}

export default function OnlineResourcesPage() {
    return (
        <>
            <OnlineResources />
        </>
    )
}   
