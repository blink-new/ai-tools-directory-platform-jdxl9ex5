import { Clock } from 'lucide-react'
import { ToolCard } from '../tools/ToolCard'

export function NewestTools() {
  const newestTools = [
    {
      id: '11',
      name: 'Claude 3',
      description: 'Anthropics latest AI assistant with advanced reasoning and conversational abilities.',
      logo: '🧠',
      category: 'AI Assistant',
      pricing: 'Freemium' as const,
      rating: 4.8,
      reviewCount: 420,
      link: 'https://claude.ai',
      tags: ['Reasoning', 'Chat', 'Analysis']
    },
    {
      id: '12',
      name: 'Sora',
      description: 'OpenAIs text-to-video model that creates realistic videos from text descriptions.',
      logo: '🎥',
      category: 'Video Generation',
      pricing: 'Paid' as const,
      rating: 4.9,
      reviewCount: 180,
      link: 'https://openai.com/sora',
      tags: ['Video', 'Generation', 'AI']
    },
    {
      id: '13',
      name: 'Perplexity AI',
      description: 'AI-powered search engine that provides accurate answers with source citations.',
      logo: '🔍',
      category: 'Search',
      pricing: 'Freemium' as const,
      rating: 4.7,
      reviewCount: 890,
      link: 'https://perplexity.ai',
      tags: ['Search', 'Research', 'Citations']
    },
    {
      id: '14',
      name: 'Eleven Labs',
      description: 'Advanced AI voice synthesis for creating realistic speech and voice cloning.',
      logo: '🎙️',
      category: 'Voice AI',
      pricing: 'Freemium' as const,
      rating: 4.6,
      reviewCount: 650,
      link: 'https://elevenlabs.io',
      tags: ['Voice', 'Speech', 'Audio']
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="h-8 w-8 text-emerald-600" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
            Latest Additions
          </h2>
        </div>
        <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
          Fresh AI tools recently added to our directory. Be among the first to discover 
          cutting-edge innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newestTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}