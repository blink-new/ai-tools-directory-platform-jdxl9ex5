import { useState } from 'react'
import { Heart, ExternalLink, Star, Bookmark, TrendingUp, Sparkles, Crown } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

interface ToolCardProps {
  tool: {
    id: string
    name: string
    description: string
    category: string
    logo: string
    rating: number
    reviews: number
    pricing: 'Free' | 'Freemium' | 'Paid'
    isSponsored?: boolean
    isFeatured?: boolean
    isNew?: boolean
    tags: string[]
  }
  layout?: 'grid' | 'list'
}

export function ToolCard({ tool, layout = 'grid' }: ToolCardProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'Freemium':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Paid':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  if (layout === 'list') {
    return (
      <div 
        className="group relative bg-white rounded-2xl shadow-premium hover:shadow-premium-lg border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 p-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start space-x-4">
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`
                }}
              />
            </div>
            {tool.isSponsored && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Crown className="h-3 w-3 text-white" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {tool.name}
                  </h3>
                  {tool.isNew && (
                    <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                      New
                    </Badge>
                  )}
                  {tool.isFeatured && (
                    <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <p className="text-slate-600 text-sm line-clamp-2 mb-3 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-slate-700">{tool.rating}</span>
                    <span className="text-slate-500">({tool.reviews})</span>
                  </div>
                  <Badge className={`text-xs font-medium ${getPricingColor(tool.pricing)}`}>
                    {tool.pricing}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSave}
                  className={`p-2 transition-all duration-200 ${
                    isSaved 
                      ? 'text-red-500 hover:text-red-600' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Visit</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={`group relative card-premium transition-all duration-300 transform hover:-translate-y-1 p-6 ${
        tool.isSponsored ? 'ring-2 ring-yellow-400/50 shadow-premium-color' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sponsored Badge */}
      {tool.isSponsored && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg">
            <Crown className="h-4 w-4 text-white" />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`
              }}
            />
          </div>
          {tool.isNew && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSave}
          className={`p-2 transition-all duration-200 ${
            isSaved 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            {tool.name}
          </h3>
          {tool.isFeatured && (
            <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5">
              <TrendingUp className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium text-slate-700">{tool.rating}</span>
            <span className="text-slate-500">({tool.reviews})</span>
          </div>
          <Badge className={`text-xs font-medium ${getPricingColor(tool.pricing)}`}>
            {tool.pricing}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-1 pt-2">
          {tool.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 2 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500">
              +{tool.tags.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-medium text-slate-600 border-slate-300">
            {tool.category}
          </Badge>
          <Button
            size="sm"
            className={`btn-premium text-sm px-4 py-2 transform transition-all duration-300 ${
              isHovered ? 'scale-105' : ''
            }`}
          >
            <span>Visit Tool</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}