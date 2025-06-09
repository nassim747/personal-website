import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Nassim</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
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
              Blog
            </h1>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-secondary/50 rounded-lg p-8 md:p-12">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
                  Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  This is where I'm going to document my learning, the progress of my projects and maybe my thoughts about current events in tech, finance and my other interests
                </p>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">
                    Planning to publish articles every two weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 