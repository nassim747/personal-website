"use client"

import { Card } from "@/components/ui/card"

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  Backend: ["Node.js", "Express", "Python", "Django"],
  DevOps: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"],
}

const categoryColors = {
  Frontend: "from-blue-500/10 to-cyan-500/10 border-blue-200 dark:border-blue-800",
  Backend: "from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-800", 
  DevOps: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800"
}

const techColors = {
  Frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Backend: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  DevOps: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
}

export default function TechStack() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {Object.entries(technologies).map(([category, techs]) => (
          <Card key={category} className={`p-8 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-current to-transparent mx-auto opacity-30"></div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${techColors[category as keyof typeof techColors]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

