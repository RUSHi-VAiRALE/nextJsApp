import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '@/firebase';

// Helper function to strip HTML tags
const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
};

export async function generateMetadata({ params }) {
    try {
        const db = getFirestore(app);
        const blogRef = doc(db, "blogs", params.id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
            const data = blogSnap.data();
            const description = stripHtml(data.content).slice(0, 160);

            return {
                title: data.title || 'CLATians Blog Post',
                description: description || 'Read the latest articles and updates from CLATians',
                keywords: `${data.category || 'law entrance'}, CLAT, blog, legal education`,
                openGraph: {
                    title: data.title,
                    description: description,
                    url: `https://www.clatians.in/blogs/${params.id}`,
                    siteName: 'CLATians',
                    type: 'article',
                    images: data.image ? [{ url: data.image }] : [],
                },
                twitter: {
                    card: 'summary_large_image',
                    title: data.title,
                    description: description,
                    images: data.image ? [data.image] : [],
                },
            };
        }
    } catch (error) {
        console.error('Error fetching blog metadata:', error);
    }

    // Fallback metadata
    return {
        title: 'CLATians Blog – CLAT & Law Entrance Exam Tips',
        description: 'Stay ahead with the latest legal education articles, current affairs updates & exam-prep advice from Patna\'s leading CLAT coaching institute.',
        openGraph: {
            title: 'CLATians Blog – CLAT & Law Entrance Exam Tips',
            description: 'Stay ahead with the latest legal education articles, current affairs updates & exam-prep advice from Patna\'s leading CLAT coaching institute.',
            url: 'https://www.clatians.in/blogs',
            siteName: 'CLATians',
            type: 'article',
        },
    };
}

export default function BlogPostLayout({ children }) {
    return children;
}

