"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Google Cloud Platform"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase",],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Data Structures in C++", "Python", "SQL"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git/Github", "VS Code", "PowerBI", "Cursor", "Agile/Scrum", "Tableu"],
  },
   {
    title: "Data Analytics ",
    icon: Database,
    skills: ["Data Visualizatio tools", "Numpy", "Pandas", "Excel", "Basic Statistics"],
  },
]

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
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="container px-4 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={item}>
                <Card className="transition-all hover:shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-lg bg-primary/10 p-2"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 0.5 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}