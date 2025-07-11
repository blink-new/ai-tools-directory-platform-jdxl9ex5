import { Link } from 'react-router-dom'
import { Sparkles, Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '../ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    product: [
      { name: 'Browse Tools', href: '/browse' },
      { name: 'Categories', href: '/browse' },
      { name: 'Submit Tool', href: '/submit-tool' },
      { name: 'Blog', href: '/blog' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'API Docs', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Newsletter', href: '/newsletter' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/aitools' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aitools' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/aitools' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@aitools.directory' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-premium-color">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl opacity-30 blur"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-white">AI Tools</span>
                  <span className="text-sm text-slate-400 font-medium -mt-1">Directory</span>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 max-w-sm">
                The ultimate platform to discover, compare, and choose the perfect AI tools for your needs. 
                Trusted by 25,000+ professionals worldwide.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="font-heading text-lg font-semibold text-white">Stay Updated</h4>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                  <Button className="btn-premium px-6 py-3 text-sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-6">Product</h4>
                <ul className="space-y-4">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-6">Company</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-6">Resources</h4>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-semibold text-white mb-6">Legal</h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-slate-400">
              <span>&copy; 2024 AI Tools Directory. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for the AI community.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <span>🚀 2,000+ AI Tools</span>
                <span>⭐ 50+ Categories</span>
                <span>👥 25k+ Users</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}