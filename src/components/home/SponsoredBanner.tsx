import { ExternalLink, Star } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export function SponsoredBanner() {
  const sponsoredTool = {
    name: 'ChatGPT Plus',
    description: 'The most advanced AI assistant with GPT-4, image generation, and priority access.',
    logo: '🤖',
    category: 'AI Assistant',
    rating: 4.9,
    price: '$20/month',
    features: ['GPT-4 Access', 'Image Generation', 'Priority Support', 'Faster Response'],
    link: '#'
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">
          Featured Partner
        </Badge>
        <h2 className="text-3xl font-bold text-slate-900">
          Discover Our Featured AI Tool
        </h2>
      </div>

      <Card className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>
        
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{sponsoredTool.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{sponsoredTool.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{sponsoredTool.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{sponsoredTool.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 mb-6">{sponsoredTool.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {sponsoredTool.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Try {sponsoredTool.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-2xl font-bold text-slate-900">{sponsoredTool.price}</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-slate-600">👤</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="h-2 bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 bg-blue-200 rounded w-4/5 mb-2"></div>
                    <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="h-2 bg-slate-300 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}