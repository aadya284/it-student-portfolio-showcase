import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main>
          <ProjectsSection />
        </main>
      </div>
    </div>
  )
}
