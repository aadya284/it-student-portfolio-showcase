import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProjectsSection />
      </main>
    </div>
  )
}
