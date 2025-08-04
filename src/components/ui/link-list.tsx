import { cn } from "@/lib/utils"
import Link from "next/link"

interface LinkItem {
  name: string
  href: string
}

interface LinkListProps {
  title: string
  links: LinkItem[]
  className?: string
}

export default function LinkList({ title, links, className }: LinkListProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <div className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
} 