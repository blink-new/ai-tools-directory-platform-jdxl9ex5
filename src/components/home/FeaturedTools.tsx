import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import { ToolCard } from '../tools/ToolCard'

export function FeaturedTools() {
  const featuredTools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'Revolutionary AI assistant that can help with writing, coding, analysis, and creative tasks. Perfect for professionals and students.',
      category: 'Content Creation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
      rating: 4.9,
      reviews: 15420,
      pricing: 'Freemium' as const,
      isFeatured: true,
      isSponsored: true,
      tags: ['AI Assistant', 'Writing', 'Coding', 'Analysis']
    },
    {
      id: '2',
      name: 'Midjourney',
      description: 'Create stunning AI-generated artwork and images from text descriptions. Professional-quality results for artists and designers.',
      category: 'Design Tools',
      logo: 'https://cdn.sanity.io/images/4zrzovbb/website/1c0f7fa6c6a4f4f8e1e1e7b2b0b6b0b7b0b6b0b7.png',
      rating: 4.8,
      reviews: 8932,
      pricing: 'Paid' as const,
      isFeatured: true,
      tags: ['AI Art', 'Image Generation', 'Design', 'Creative']
    },
    {
      id: '3',
      name: 'Notion AI',
      description: 'Enhanced productivity with AI-powered writing, brainstorming, and content creation directly in your Notion workspace.',
      category: 'Productivity',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png',
      rating: 4.7,
      reviews: 12456,
      pricing: 'Freemium' as const,
      isFeatured: true,
      tags: ['Productivity', 'Writing', 'Workspace', 'Organization']
    },
    {
      id: '4',
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps you write code faster and with fewer errors. Perfect for developers and programmers.',
      category: 'Code Generation',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      rating: 4.6,
      reviews: 9834,
      pricing: 'Paid' as const,
      isFeatured: true,
      tags: ['Coding', 'Programming', 'Development', 'AI Assistant']
    },
    {
      id: '5',
      name: 'Grammarly',
      description: 'AI-powered writing assistant that helps with grammar, spelling, clarity, and tone. Essential for professional communication.',
      category: 'Writing',
      logo: 'https://static.grammarly.com/assets/files/eda6e4ead24323dd0f76ab2e4b1e8d96/grammarly_logo_icon.svg',
      rating: 4.5,
      reviews: 23567,
      pricing: 'Freemium' as const,
      isFeatured: true,
      tags: ['Writing', 'Grammar', 'Editing', 'Communication']
    },
    {
      id: '6',
      name: 'Jasper',
      description: 'AI content creator for marketing teams. Generate high-quality blog posts, social media content, and marketing copy.',
      category: 'Marketing',
      logo: 'https://www.jasper.ai/wp-content/uploads/2022/08/jasper-logo-icon.svg',
      rating: 4.4,
      reviews: 6789,
      pricing: 'Paid' as const,
      isFeatured: true,
      isNew: true,
      tags: ['Marketing', 'Content Creation', 'Copywriting', 'Social Media']
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/60 text-blue-700 text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Featured Tools
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Most Popular{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Tools
            </span>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the top-rated AI tools that are transforming how professionals work. 
            Hand-picked by our community of 25,000+ users.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center p-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-premium-color">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-3 rounded-xl font-semibold shadow-none hover:shadow-none m-0"
            >
              <span>View All Tools</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-slate-500">
            <Sparkles className="inline h-4 w-4 mr-1" />
            2,000+ tools across 50+ categories
          </p>
        </div>
      </div>
    </section>
  )
}