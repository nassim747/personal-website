import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Project {
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl?: string
  tags: string[]
  featured: boolean
  order: number
  slug: string
  content: string
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  // Get file names under /content/projects
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        ...matterResult.data,
      } as Project
    })

  // Sort projects by order
  return allProjectsData.sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): Project[] {
  const allProjects = getAllProjects()
  return allProjects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    } as Project
  } catch (error) {
    return null
  }
}

export function getAllProjectSlugs(): string[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
} 