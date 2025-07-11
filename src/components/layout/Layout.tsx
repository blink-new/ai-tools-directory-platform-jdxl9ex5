import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}