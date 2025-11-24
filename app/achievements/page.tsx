import { Navigation } from "@/components/navigation"
import { AchievementsSection } from "@/components/achievements-section"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AchievementsSection />
      </main>
    </div>
  )
}
