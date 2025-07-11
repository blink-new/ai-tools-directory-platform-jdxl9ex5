import { TrendingUp } from 'lucide-react'
import { ToolCard } from '../tools/ToolCard'

export function PopularTools() {
  const popularTools = [
    {
      id: '5',
      name: 'ChatGPT',
      description: 'The most popular AI chatbot for conversations, writing, coding, and problem-solving.',
      logo: '🤖',
      category: 'AI Assistant',
      pricing: 'Freemium' as const,
      rating: 4.9,
      reviewCount: 5420,
      link: 'https://chat.openai.com',
      tags: ['Chatbot', 'Writing', 'Q&A']
    },
    {
      id: '6',
      name: 'Canva',
      description: 'Design tool with AI-powered features for creating stunning graphics and presentations.',
      logo: '🎨',
      category: 'Design',
      pricing: 'Freemium' as const,
      rating: 4.8,
      reviewCount: 3200,
      link: 'https://canva.com',
      tags: ['Design', 'Graphics', 'Templates']
    },
    {
      id: '7',
      name: 'Grammarly',
      description: 'AI writing assistant that helps improve grammar, clarity, and tone in your writing.',
      logo: '✍️',
      category: 'Writing',
      pricing: 'Freemium' as const,
      rating: 4.6,
      reviewCount: 2800,
      link: 'https://grammarly.com',
      tags: ['Writing', 'Grammar', 'Editing']
    },
    {
      id: '8',
      name: 'Jasper',
      description: 'AI content creation platform for marketing copy, blog posts, and social media.',
      logo: '📰',
      category: 'Content',
      pricing: 'Paid' as const,
      rating: 4.7,
      reviewCount: 1900,
      link: 'https://jasper.ai',
      tags: ['Content', 'Marketing', 'Copywriting']
    },
    {
      id: '9',
      name: 'Runway ML',
      description: 'Creative toolkit powered by machine learning for video editing and generation.',
      logo: '🎬',
      category: 'Video',
      pricing: 'Freemium' as const,
      rating: 4.5,
      reviewCount: 1100,
      link: 'https://runwayml.com',
      tags: ['Video', 'ML', 'Creative']
    },
    {
      id: '10',
      name: 'Copy.ai',
      description: 'AI-powered copywriting tool for marketing, sales, and content creation.',
      logo: '📝',
      category: 'Copywriting',
      pricing: 'Freemium' as const,
      rating: 4.4,
      reviewCount: 980,
      link: 'https://copy.ai',
      tags: ['Copywriting', 'Marketing', 'Content']
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
            Trending This Week
          </h2>
        </div>
        <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          The most popular AI tools based on user reviews, ratings, and community engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}