import { Navigation } from "@/components/navigation"
import { AchievementsSection } from "@/components/achievements-section"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main>
          <AchievementsSection />
        </main>
      </div>
    </div>
  )
}
