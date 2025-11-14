'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from '@/firebase'
import parse from 'html-react-parser'

export default function BlogPost() {
  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [shareUrl, setShareUrl] = useState('')
  const params = useParams()

  useEffect(() => {
    // Set the share URL when component mounts
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href)
    }

    const fetchBlogData = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const blogId = params.id

        const blogRef = doc(db, "blogs", blogId)
        const blogSnap = await getDoc(blogRef)

        if (blogSnap.exists()) {
          const data = {
            id: blogSnap.id,
            ...blogSnap.data()
          }
          setBlogData(data)
        } else {
          setError("Blog not found")
        }
      } catch (err) {
        console.error("Error fetching blog:", err)
        setError("Failed to load blog")
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchBlogData()
    }
  }, [params.id])

  // Function to handle social media sharing
  const handleShare = (platform) => {
    const title = blogData?.title || 'CLATians Blog Post'
    const url = encodeURIComponent(shareUrl)

    let shareLink = ''

    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`
        break
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + shareUrl)}`
        break
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(title)}`
        break
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this article: ' + shareUrl)}`
        break
      default:
        break
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer')
    }
  }

  // Function to copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        alert('Link copied to clipboard!')
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err)
      })
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#fdf6f4]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
      </div>
    )
  }

  if (error || !blogData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#fdf6f4]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {error || "Blog not found"}
        </h1>
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-red-700"
        >
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Blogs
        </Link>
      </div>
    )
  }

  return (
    <article className="bg-[#fdf6f4] min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px]">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-600 hover:text-red-700 mb-8 group"
        >
          <i className="bi bi-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {blogData.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <i className="bi bi-person-circle mr-2"></i>
              {blogData.author}
            </div>
            <div className="flex items-center">
              <i className="bi bi-calendar3 mr-2"></i>
              {blogData.date}
            </div>
            <div className="flex items-center">
              <i className="bi bi-clock mr-2"></i>
              {blogData.readTime} min read
            </div>
            {blogData.category && (
              <div className="flex items-center">
                <i className="bi bi-tag mr-2"></i>
                {blogData.category}
              </div>
            )}
            {blogData.frequency && (
              <div className="flex items-center">
                <i className="bi bi-calendar-check mr-2"></i>
                {blogData.frequency}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {/* {blogData.image && (
          <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={blogData.image}
              alt={blogData.title}
              fill
              className="object-cover"
            />
          </div>
        )} */}

        {/* Blog Content */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
          {parse(blogData.content)}

          {/* Social Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Share this article</h3>

            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <i className="bi bi-facebook"></i>
              </button>

              {/* Twitter/X */}
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                aria-label="Share on Twitter/X"
              >
                <i className="bi bi-twitter"></i>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                aria-label="Share on WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </button>

              {/* Telegram */}
              <button
                onClick={() => handleShare('telegram')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Share on Telegram"
              >
                <i className="bi bi-telegram"></i>
              </button>

              {/* Email */}
              <button
                onClick={() => handleShare('email')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                aria-label="Share via Email"
              >
                <i className="bi bi-envelope"></i>
              </button>

              {/* Copy Link */}
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center px-4 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                aria-label="Copy Link"
              >
                <i className="bi bi-link-45deg mr-1"></i>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}