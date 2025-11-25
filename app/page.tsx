import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  )
}