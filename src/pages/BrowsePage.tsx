import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Filter, Grid, List } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { ToolCard } from '../components/tools/ToolCard'

export function BrowsePage() {
  const { category } = useParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('popular')

  // Mock data for now
  const tools = [
    {
      id: '1',
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
    // Add more tools...
  ]

  const categories = [
    'AI Assistant', 'Content Creation', 'Design', 'Development', 'Marketing', 
    'Productivity', 'Data Analysis', 'Video', 'Audio', 'Image Generation'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {category ? `${category} Tools` : 'Browse AI Tools'}
          </h1>
          <p className="text-gray-600">
            Discover and compare AI tools across different categories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Category
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase().replace(' ', '-')}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Pricing
                  </label>
                  <div className="space-y-2">
                    {['Free', 'Freemium', 'Paid'].map((price) => (
                      <label key={price} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="ml-2 text-sm text-gray-700">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tools Grid */}
            <div className={viewMode === 'grid' ? 
              'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 
              'space-y-4'
            }>
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}