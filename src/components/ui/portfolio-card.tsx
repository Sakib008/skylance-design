import { cn } from "@/lib/utils"
import Image from "next/image"

interface PortfolioCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  technologies: string[]
  height?: "h-80" | "h-96"
  offset?: string
  className?: string
}

export default function PortfolioCard({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  technologies, 
  height = "h-80",
  offset = "",
  className 
}: PortfolioCardProps) {
  return (
    <div className={cn("group", offset, className)}>
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={600}
          className={cn(
            "w-full object-cover group-hover:scale-105 transition-transform duration-500",
            height
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 