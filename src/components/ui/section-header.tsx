import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface SectionHeaderProps {
  badge: string
  title: string
  description: string
  linkText?: string
  linkHref?: string
  className?: string
}

export default function SectionHeader({ 
  badge, 
  title, 
  description, 
  linkText, 
  linkHref, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-end justify-between mb-16", className)}>
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
          {badge}
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl">
          {description}
        </p>
      </div>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="text-purple-600 flex items-center p-2.5 rounded-2xl hover:text-purple-800 hover:bg-purple-100/80 mt-6 md:mt-0"
        >
          {linkText}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  )
} 