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
      <main className="container px-4 py-12 md:py-16">
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Personal Information */}
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Your Name</CardTitle>
                  <p className="text-lg text-muted-foreground">3rd Year BTech IT Student</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>City, State, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Github className="h-4 w-4 text-primary" />
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle>Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Technology in Information Technology</h3>
                    <p className="text-muted-foreground">Your University Name</p>
                    <p className="text-sm text-primary">2022 - 2026</p>
                    <p className="text-sm mt-1">CGPA: 8.5/10</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Higher Secondary Education</h3>
                    <p className="text-muted-foreground">Your School Name</p>
                    <p className="text-sm text-primary">2020 - 2022</p>
                    <p className="text-sm mt-1">Percentage: 92%</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    <CardTitle>Technical Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Programming Languages</h4>
                    <p className="text-sm text-muted-foreground">JavaScript, TypeScript, Python, Java, C++</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">React.js, Next.js, Tailwind CSS, HTML/CSS</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">Node.js, Express.js, REST APIs, GraphQL</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Databases</h4>
                    <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, MySQL, Firebase</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                    <p className="text-sm text-muted-foreground">Git, Docker, AWS, Linux, Agile/Scrum</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <CardTitle>Experience</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Full Stack Developer Intern</h3>
                    <p className="text-muted-foreground">Tech Company XYZ</p>
                    <p className="text-sm text-primary">Summer 2024 (3 months)</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-muted-foreground">
                      <li>Developed and maintained web applications using React and Node.js</li>
                      <li>Collaborated with cross-functional teams in an Agile environment</li>
                      <li>Implemented RESTful APIs and integrated third-party services</li>
                      <li>Improved application performance by 30% through optimization</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle>Achievements & Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 1st Place - TechFest 2024 Hackathon (200+ participants)</li>
                    <li>• Finalist - Smart India Hackathon 2023</li>
                    <li>• Published Research Paper at IEEE Conference</li>
                    <li>• Google Cloud Certified - Associate Cloud Engineer</li>
                    <li>• AWS Certified Cloud Practitioner</li>
                    <li>• Meta Front-End Developer Professional Certificate</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <footer className="border-t py-6 mt-12">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
