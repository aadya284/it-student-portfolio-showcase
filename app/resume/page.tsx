"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Award, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ResumePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="w-full max-w-6xl mx-auto px-4">
        <main className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Resume</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Download my resume or view it below
            </p>
            {/* Download button moved to action area below */}
          </motion.div>

          {/* Download / Preview actions (embedded preview removed) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">You can download the PDF or open a preview in a new tab.</p>
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Preview
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
