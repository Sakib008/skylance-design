import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckCircle, ChevronRight, LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  href: string
  color: "purple" | "blue" | "green"
  className?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  href, 
  color,
  className 
}: ServiceCardProps) {
  const colors = {
    purple: {
      icon: "from-purple-500 to-purple-700",
      hover: "from-purple-500/5 to-pink-500/5",
      button: "text-purple-600 hover:text-purple-800"
    },
    blue: {
      icon: "from-blue-500 to-blue-700",
      hover: "from-blue-500/5 to-cyan-500/5",
      button: "text-blue-600 hover:text-blue-800"
    },
    green: {
      icon: "from-green-500 to-green-700",
      hover: "from-green-500/5 to-emerald-500/5",
      button: "text-green-600 hover:text-green-800"
    }
  }

  return (
    <Link
      href={href}
      className={cn(
        "group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100",
        className
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity",
        colors[color].hover
      )}></div>
      <div className="relative">
        <div className={cn(
          "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
          colors[color].icon
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <ul className="space-y-3 text-gray-700">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Button
            variant="ghost"
            className={cn(
              "p-0 group-hover:translate-x-2 transition-transform",
              colors[color].button
            )}
          >
            Learn more
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  )
} 