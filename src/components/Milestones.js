import Image from 'next/image'
import Link from 'next/link'
import CLAT from '../../public/CLAT.webp'
import AILET from '../../public/AILET.webp'
import MHCET from '../../public/MHCET.webp'
import CUET from '../../public/CUET.webp'
import AIL from '../../public/AIL.webp'
import LSAT from '../../public/LSAT.webp'
export default function Milestones() {
  const milestones = [
    {
      title: "CLAT",
      description: "Crack CLAT with expert coaching—your gateway to top NLUs!",
      image: CLAT,
      link: "/lawEntranceExams/CKJONOTBolKgUMALgplj"
    },
    {
      title: "AILET",
      description: "Crack AILET with expert coaching—your path to NLU Delhi.",
      image: AILET,
      link: "/lawEntranceExams/PBMhB1uEDpTBtD9CBTA1"
    },
    {
      title: "MH-CET LAW",
      description: "Ace MH-CET with expert coaching—your path to top law colleges in Maharashtra.",
      image: MHCET,
      link: "/lawEntranceExams/chuGothq1GP1okYGtL7k"
    },
    {
      title: "CUET",
      description: "Prepare for CUET with expert coaching—your gateway to top universities.",
      image: CUET,
      link: "/lawEntranceExams/F1UhzvikvDCTKuM8NmuG"
    },

    {
      title: "AIL-LET",
      description: "Crack AIL-LET with expert coaching—your path to the Army Institute of Law.",
      image: AIL,
      link: "/lawEntranceExams/AKiJXQ4khgnb4qnbMeSZ"
    },
    {
      title: "LSAT",
      description: "Crack LSAT with expert coaching—your gateway to top law schools globally.",
      image: LSAT,
      link: "/lawEntranceExams/0D53yWqCef2zYkcDy7du"
    },
  ]

  return (
    <section className="bg-[#f3f3f3] py-12 px-4 md:px-8 lg:px-12 shadow-lg shadow-gray-300/50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md inline-block">KNOW</span> YOUR MILESTONE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-2">
          {milestones.map((milestone, index) => (
            <div className="milestone-step flex flex-col items-center" key={index}>
              <div className="milestone-circle w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 p-[4px] bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Link href={milestone.link}>
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      width={60}
                      height={60}
                      className="milestone-img w-12 h-12 sm:w-15 sm:h-15 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
              <div className="milestone-text mt-2 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{milestone.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 max-w-[200px] mx-auto">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 