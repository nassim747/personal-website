"use client"

import { Card } from "@/components/ui/card"

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL"],
  Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  DevOps: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
  Tools: ["VS Code", "Postman", "Figma", "Jest", "GitHub", "Vercel"]
}

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {Object.entries(technologies).map(([category, techs]) => (
        <Card key={category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{category}</h3>
          <ul className="space-y-2">
            {techs.map((tech) => (
              <li key={tech} className="text-sm text-gray-600 dark:text-gray-400">
                {tech}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

