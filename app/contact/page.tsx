import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main>
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
