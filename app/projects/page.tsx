import { getAllProjects } from "@/lib/projects"
import ProjectCard from "../components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Nassim</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/blog" className="transition-colors hover:text-foreground/80">
                Blog
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              All Projects
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.githubUrl}
                  deployLink={project.liveUrl}
                  tags={project.tags}
                  projectSlug={project.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 