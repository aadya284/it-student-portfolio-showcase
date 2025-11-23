"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.example.com",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management system with drag-and-drop functionality and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.example.com",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=400&fit=crop",
    technologies: ["React Native", "OpenWeather API", "Redux", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.example.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and scheduling features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4.example.com",
  },
  {
    title: "AI Chatbot Assistant",
    description: "Intelligent chatbot with natural language processing capabilities for customer support automation.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    githubUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5.example.com",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolio websites with drag-and-drop editor and SEO optimization.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "Tailwind CSS", "AWS S3"],
    githubUrl: "https://github.com/yourusername/project6",
    liveUrl: "https://project6.example.com",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="container px-4 py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -8 }}>
              <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}