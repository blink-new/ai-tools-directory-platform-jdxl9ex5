import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent } from '../ui/card'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle newsletter signup
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <CardContent className="relative p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Mail className="h-8 w-8" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead of the AI Revolution
            </h2>
            
            <p className="font-sans text-lg text-blue-100 mb-8 font-medium leading-relaxed">
              Get weekly updates on the latest AI tools, trends, and insights. 
              Join 25,000+ professionals who trust our curated content.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-200 focus:bg-white/30 font-medium"
                  required
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium">
                  ✓ Thanks for subscribing! Check your email for confirmation.
                </div>
              </div>
            )}

            <p className="font-sans text-sm text-blue-200 mt-4 font-medium">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}