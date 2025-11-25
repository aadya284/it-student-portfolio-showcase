import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main>
          <SkillsSection />
        </main>
      </div>
    </div>
  )
}
