import { FaBook, FaClipboardList, FaDesktop, FaRegNewspaper } from 'react-icons/fa';
import Link from 'next/link';
const resources = [
  { title: "Alumni Support", description: "Empowering Alumni, Strengthening Connections.", icon: <FaBook className="text-blue-400 text-3xl" />, bgColor: "bg-[#e8f4fe]", link: "/forums" },
  { title: "Carrier Guidance", description: "Expert career guidance to help you achieve your goals!", icon: <FaRegNewspaper className="text-red-500 text-3xl" />, bgColor: "bg-[#fdecef]", link: "/careers" },
  { title: "Blogs", description: "Explore Our Latest Blogs", icon: <FaDesktop className="text-blue-500 text-3xl" />, bgColor: "bg-[#eaf4fe]", link: "/blogs" },
  { title: "Online Mock Test", description: "Explore Online Mock Test Series for Preparation", icon: <FaClipboardList className="text-green-500 text-3xl" />, bgColor: "bg-[#eaffea]", link: "/mock-tests/online" },
];
export default function LearningResources() {
  return (
    <section className="py-12 bg-[#f3f3f3] shadow-lg shadow-gray-300/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md inline-block">CLATians</span> SPECIAL
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore resources to enhance your preparation for exams with our curated blogs, courses, test
            series, and books.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Resource Cards */}
          {resources.map((resource, index) => (
            <Link href={resource.link} key={index} className="aspect-square">
              <div className={`resource-card text-center p-2 md:p-6 ${resource.bgColor} rounded-2xl h-full shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center`}>
                <div className="icon-wrapper w-12 h-12 mb-4 flex justify-center items-center md:w-20 md:h-20 bg-white rounded-full shadow-lg">
                  {resource.icon}
                </div>
                <h5 className="font-bold text:md md:text-lg mb-2">{resource.title}</h5>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 