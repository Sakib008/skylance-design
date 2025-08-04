import { cn } from "@/lib/utils"

interface StatCardProps {
  value: string
  label: string
  className?: string
}

export default function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("group", className)}>
      <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
        {value}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  )
} 