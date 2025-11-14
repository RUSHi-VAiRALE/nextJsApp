// Create a metadata map for different exam IDs
const examMetadata = {
    'CKJONOTBolKgUMALgplj': {
        title: 'CLAT & Law Entrance Exam Coaching in Patna, Bihar | CLATians Institute',
        description: 'Looking for expert CLAT and law‐entrance exam coaching in Patna, Bihar? CLATians offers focused preparation for CLAT, AILET, CUET (Law) with top faculty, mock tests, and personalised mentoring. Join Patna\'s trusted law entrance institute today!',
    },
    'F1UhzvikvDCTKuM8NmuG': {
        title: 'CUET Law Entrance Exam Guide – Best CLAT & Law Coaching in Patna, Bihar | CLATians',
        description: 'Get the complete CUET (Law) entrance exam guide with exam pattern, subject-wise insights, strategy and tips. Join CLATians – the leading law-entrance coaching institute in Patna, Bihar – and boost your chances of success.',
    },
    '0D53yWqCef2zYkcDy7du': {
        title: 'LSAT Coaching in Patna | Best Law Entrance Institute – CLATians Bihar',
        description: 'Join Patna\'s leading law-entrance institute, CLATians, offering expert LSAT preparation, intensive test series & personalized mentoring for students from Bihar. Enroll now for top law school entry.',
    },
    'chuGothq1GP1okYGtL7k': {
        title: 'MH-CET LAW 2025 Complete Guide | Best Law Entrance Exam Coaching in Patna, Bihar – CLATians',
        description: 'Get the ultimate MH-CET LAW 2025 guide – syllabus, exam pattern, preparation strategy, and top tips from Patna\'s leading law entrance coaching institute. Join CLATians in Patna, Bihar for expert guidance and assured success.',
    },
    'AKiJXQ4khgnb4qnbMeSZ': {
        title: 'CLATians Patna – AIL-LET (Army Institute of Law Entrance Test) Coaching in Patna, Bihar',
        description: 'Prepare for the AIL-LET exam with Patna\'s top law entrance coaching at CLATians. Expert faculty, mock tests, focused strategy & proven results in Bihar. Enroll now for the best AIL-LET preparation in Patna.',
    },
    'PBMhB1uEDpTBtD9CBTA1': {
        title: 'AILET Coaching in Patna | Best Law Entrance Institute – CLATians',
        description: 'Join CLATians in Patna, Bihar for top-rank AILET prep, expert faculty & mock tests. Enrol now at the leading law-entrance coaching institute.',
    },
};

export async function generateMetadata({ params }) {
    const { id } = params;
    const metadata = examMetadata[id] || {
        title: 'Law Entrance Exam Coaching in Patna, Bihar | CLATians Institute',
        description: 'Expert law entrance exam coaching in Patna, Bihar. CLATians offers comprehensive preparation for CLAT, AILET, CUET and other law entrance exams.',
    };

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: 'law entrance exam, CLAT coaching, AILET coaching, CUET law, law entrance preparation',
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url: `https://www.clatians.in/lawEntranceExams/${id}`,
            siteName: 'CLATians',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
        },
    };
}

export default function LawEntranceExamLayout({ children }) {
    return children;
}

