import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FloatingElementProps {
  icon?: React.ReactNode
  text: string
  position?: "top-right" | "bottom-left" | "top-left" | "bottom-right"
  className?: string
}

export default function FloatingElement({ 
  icon, 
  text, 
  position = "top-right",
  className 
}: FloatingElementProps) {
  const positions = {
    "top-right": "absolute z-10 -top-6 -right-6 transform rotate-6",
    "bottom-left": "absolute z-10 -bottom-8 -left-8 transform -rotate-6",
    "top-left": "absolute z-10 -top-6 -left-6 transform -rotate-6",
    "bottom-right": "absolute z-10 -bottom-8 -right-8 transform rotate-6"
  }

  return (
    <div className={cn(
      "bg-white p-1 rounded-xl shadow-lg hidden md:block",
      positions[position],
      className
    )}>
      <div className="bg-slate-900 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          {icon}
          <div className="text-xs text-white font-medium">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
} 