import { HeroSection } from '../components/home/HeroSection'
import { FeaturedTools } from '../components/home/FeaturedTools'
import { SponsoredBanner } from '../components/home/SponsoredBanner'
import { PopularTools } from '../components/home/PopularTools'
import { NewestTools } from '../components/home/NewestTools'
import { NewsletterSignup } from '../components/home/NewsletterSignup'

export function HomePage() {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <SponsoredBanner />
      <FeaturedTools />
      <PopularTools />
      <NewestTools />
      <NewsletterSignup />
    </div>
  )
}