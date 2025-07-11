import { useState } from 'react'
import { Search, Sparkles, TrendingUp, ArrowRight, Play, Users, Star } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    { icon: Sparkles, label: 'AI Tools', value: '2,000+', description: 'Curated with care' },
    { icon: TrendingUp, label: 'Categories', value: '50+', description: 'Every use case' },
    { icon: Users, label: 'Daily Users', value: '25k+', description: 'Growing community' }
  ]

  const popularSearches = [
    'Content Creation', 'Data Analysis', 'Design Tools', 
    'Productivity', 'Marketing', 'Code Generation'
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center pt-12 pb-8 lg:pt-20 lg:pb-16">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-128 h-128 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-88 h-88 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float delay-2000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-blue-200/60 text-blue-700 text-sm font-semibold mb-8 group hover:shadow-premium-color transition-all duration-300">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              <span>#1 AI Tools Discovery Platform</span>
              <TrendingUp className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Discover the{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Perfect AI Tool
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-lg rounded-lg"></div>
              </span>
              <br />
              for Every Task
            </h1>
            
            <p className="font-sans text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Browse, compare, and discover the best AI tools to{' '}
              <span className="font-semibold text-slate-800">supercharge your productivity</span>.
              <br className="hidden sm:block" />
              Trusted by over{' '}
              <span className="font-semibold text-blue-600">25,000 professionals</span>, creators, and innovators worldwide.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative flex">
                  <div className="flex-1 relative">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search for AI tools, categories, or use cases..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-16 pr-6 py-6 text-lg font-medium border-2 border-slate-200/60 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 shadow-premium bg-white/90 backdrop-blur-sm placeholder:text-slate-500 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="ml-4 px-8 py-6 text-lg rounded-2xl btn-premium group"
                  >
                    <span>Search</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <span className="text-sm font-medium text-slate-500 mr-4 hidden sm:block">Popular:</span>
              {popularSearches.map((category) => (
                <Button 
                  key={category}
                  variant="outline" 
                  size="sm"
                  className="rounded-full border-slate-300/60 bg-white/60 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/80 hover:shadow-premium transition-all duration-300 font-medium text-sm px-5 py-2"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Video Preview Button */}
            <div className="mb-16">
              <Button 
                variant="ghost" 
                className="group inline-flex items-center space-x-3 px-6 py-3 text-slate-700 hover:text-blue-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-premium group-hover:shadow-premium-color transition-all duration-300 group-hover:scale-105">
                  <Play className="h-5 w-5 text-blue-600 ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Watch Demo</div>
                  <div className="text-sm text-slate-500">See how it works</div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-18 h-18 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-premium-color group-hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                  <div className="font-heading text-lg font-semibold text-slate-800 mb-1">{stat.label}</div>
                  <div className="font-sans text-slate-600 font-medium">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-12 border-t border-slate-200/60">
              <p className="text-sm font-medium text-slate-500 mb-6">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Google', 'Microsoft', 'OpenAI', 'Figma', 'Stripe', 'Notion'].map((company) => (
                  <div key={company} className="px-4 py-2 text-slate-400 font-semibold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}