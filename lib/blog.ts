import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  tags?: string[]
  featured?: boolean
  content: string
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  // Return empty array for now - will be implemented when we add blog content
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(blogDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          content: matterResult.content,
          ...matterResult.data,
        } as BlogPost
      })

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    // If blog directory doesn't exist yet, return empty array
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    return []
  }
} 