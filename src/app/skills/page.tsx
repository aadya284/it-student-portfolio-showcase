import { Navigation } from "@/components/navigation"
import { SkillsSection } from "@/components/skills-section"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <SkillsSection />
      </main>
      <footer className="border-t py-6">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
