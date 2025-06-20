import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
export default function LegalArticles({ posts, activeTabLegal, selectedMonth, selectedYear, months, years, setSelectedMonth, setSelectedYear, setActiveTabLegal, tabs }) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            >
              {months.map((month) => (
                <option key={month.id} value={month.id}>{month.name}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-3 mb-12 max-w-sm mx-auto">
        <div className="flex items-center justify-between">
          {tabs["legal"].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabLegal(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeTabLegal === tab.id
                ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-md'
                : 'hover:bg-gray-50 text-gray-600'
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts[activeTabLegal].map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{parse(post.content)}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>{post.readTime} min read</span>
              </div>
              <Link href={`/blogs/${post.id}`} className="block w-full">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white rounded-lg hover:shadow-md transition-all duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}