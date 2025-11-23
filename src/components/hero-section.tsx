"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useTypingEffect } from "@/hooks/use-typing-effect"
import Link from "next/link"

export function HeroSection() {
  const { displayedText: nameText, isComplete: nameComplete } = useTypingEffect("Your Name", 100)
  const { displayedText: roleText } = useTypingEffect(
    nameComplete ? "3rd Year BTech IT Student" : "",
    50
  )

  return (
    <section id="about" className="container px-4 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
        >
          Welcome to my portfolio
        </motion.div>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="text-primary">
            {nameText}
            {!nameComplete && <span className="animate-pulse">|</span>}
          </span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: nameComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xl font-medium text-muted-foreground md:text-2xl min-h-[2rem]"
        >
          {roleText}
          {nameComplete && roleText.length < "3rd Year BTech IT Student".length && (
            <span className="animate-pulse">|</span>
          )}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
        >
          Passionate about building innovative solutions and learning new technologies. 
          Specializing in full-stack development with a focus on creating impactful projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
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
          className="flex justify-center gap-4"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link href="/skills" className="animate-bounce text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}