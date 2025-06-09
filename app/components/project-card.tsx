import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  deployLink?: string
  tags: string[]
  projectSlug?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  deployLink,
  tags,
  projectSlug,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {projectSlug && (
            <Link
              href={`/projects/${projectSlug}`}
              className="text-primary hover:underline font-medium"
            >
              Read More →
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub →
          </Link>
          {deployLink && (
            <Link
              href={deployLink}
              target="_blank"
              className="text-primary hover:underline"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}

