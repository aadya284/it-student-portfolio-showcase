import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkillsSection />
      </main>
    </div>
  )
}
