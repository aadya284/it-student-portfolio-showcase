"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, LucideBluetoothConnected, Mail } from "lucide-react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useTypingEffect } from "@/hooks/use-typing-effect"
import Link from "next/link"

export function HeroSection() {
  const { displayedText: headingText, isComplete: headingComplete } = useTypingEffect(
    "Hi, I'm Aadya Paradkar",
    150,
    true,
    2000
  )
  useEffect(() => {
    // no-op: keep effect to preserve any timing side-effects for heading
  }, [headingComplete])
  // Show static role text (no typing) per request
  const displayedRole = "BTech IT Student at Bharati Vidyapeeth College of Engineering, Pune"
  const roleVisible = Boolean(displayedRole)

  return (
    <section id="about" className="container px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Photo column */}
          <div className="shrink-0 w-40 md:w-48 lg:w-56 flex justify-center md:justify-start">
            <img
              src="/profile.jpg"
              alt="Aadya Paradkar"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Text column */}
          <div className="w-full text-center md:text-left">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary">
                {headingText}
                {!headingComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: headingComplete ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ willChange: 'opacity' }}
              className="mb-4 text-lg font-medium text-muted-foreground md:text-2xl min-h-8"
            >
              {displayedRole}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={
                roleVisible
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.98 }
              }
              transition={{ type: "spring", stiffness: 110, damping: 14, mass: 0.8 }}
              style={{ willChange: 'transform, opacity' }}
              className="mb-6 text-base md:text-lg text-muted-foreground max-w-2xl"
            >
              Passionate about building innovative solutions and learning new technologies. 
              Specializing in Data Analytics with a focus on creating impactful projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <Button size="lg" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              style={{ willChange: 'opacity' }}
              className="flex justify-center md:justify-start gap-4"
            >
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/aadya284" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/aadya-paradkar-46526a1b4/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:aadyaparadkar@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}