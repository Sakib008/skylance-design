import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CTAButtonProps {
  children: React.ReactNode
  href: string
  variant?: "primary" | "secondary" | "white"
  size?: "default" | "lg"
  showArrow?: boolean
  className?: string
}

export default function CTAButton({ 
  children, 
  href, 
  variant = "primary", 
  size = "default",
  showArrow = true,
  className 
}: CTAButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white",
    secondary: " text-white bg-white/10 hover:text-white hover:bg-black/10",
    white: "bg-white text-purple-600 hover:bg-gray-100"
  }

  const sizes = {
    default: "px-6 py-3",
    lg: "text-lg px-8 py-6 rounded-xl"
  }

  return (
    <Link href={href}>
      <Button
        size={size === "lg" ? "lg" : "default"}
        variant={variant === "secondary" ? "outline" : "default"}
        className={cn(
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
        {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
    </Link>
  )
} 