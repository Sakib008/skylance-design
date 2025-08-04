import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
  className?: string
}

export default function SocialIcon({ icon: Icon, href, label, className }: SocialIconProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group",
        className
      )}
      aria-label={label}
    >
      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
    </Link>
  )
} 