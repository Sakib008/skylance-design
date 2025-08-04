import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "purple" | "white"
  className?: string
  icon?: React.ReactNode
}

export default function Badge({ 
  children, 
  variant = "default", 
  className,
  icon 
}: BadgeProps) {
  const variants = {
    default: "inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium",
    purple: "inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium",
    white: "inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium backdrop-blur-sm"
  }

  return (
    <div className={cn(variants[variant], className)}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  )
} 