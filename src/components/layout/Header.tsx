import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, Bookmark, User, TrendingUp, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'

export function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const navigation = [
    { name: 'Browse', href: '/browse' },
    { name: 'Categories', href: '/browse' },
    { name: 'Blog', href: '/blog' },
    { name: 'Submit Tool', href: '/submit-tool' }
  ]

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-premium-color group-hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl opacity-30 blur group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-slate-900 tracking-tight">AI Tools</span>
                <span className="text-xs text-slate-500 font-medium -mt-1">Directory</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative inline-flex items-center px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-200"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search 2,000+ AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 placeholder:text-slate-500 font-medium text-slate-900"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 font-medium"
            >
              <Bookmark className="h-4 w-4" />
              <span>Saved</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden sm:flex items-center space-x-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
            >
              <User className="h-4 w-4" />
            </Button>
            
            <Button className="btn-premium text-sm px-6 py-2.5 font-semibold">
              <span>Sign In</span>
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] glass border-l border-white/20">
                <SheetHeader className="border-b border-slate-200/60 pb-6">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation and user actions</SheetDescription>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-lg font-bold text-slate-900">AI Tools</span>
                      <span className="text-xs text-slate-500 font-medium -mt-1">Directory</span>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center px-3 py-3 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="mt-auto pt-6 border-t border-slate-200/60">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 font-medium"
                    >
                      <Bookmark className="h-4 w-4 mr-3" />
                      Saved Tools
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 font-medium"
                    >
                      <TrendingUp className="h-4 w-4 mr-3" />
                      Trending
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 w-full bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 placeholder:text-slate-500 font-medium"
            />
          </div>
        </div>
      </div>
    </header>
  )
}