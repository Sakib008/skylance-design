import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ContactInfoProps {
  icon: LucideIcon
  label: string
  value: string | React.ReactNode
  className?: string
}

export default function ContactInfo({ icon: Icon, label, value, className }: ContactInfoProps) {
  return (
    <div className={cn("flex items-start space-x-3 group", className)}>
      <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
        <Icon className="h-5 w-5 text-purple-400" />
      </div>
      <div>
        <p className="text-gray-300 text-sm">{label}</p>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  )
} 