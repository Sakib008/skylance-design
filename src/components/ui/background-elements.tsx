import { cn } from "@/lib/utils"

interface BackgroundElementsProps {
  variant?: "hero" | "section" | "footer"
  className?: string
}

export default function BackgroundElements({ variant = "section", className }: BackgroundElementsProps) {
  const variants = {
    hero: {
      container: "absolute top-0 left-0 w-full h-full overflow-hidden",
      elements: [
        "absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl",
        "absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
      ],
      grid: "absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"
    },
    section: {
      container: "absolute top-0 left-0 w-full h-full overflow-hidden",
      elements: [
        "absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl",
        "absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"
      ]
    },
    footer: {
      container: "absolute top-0 left-0 w-full h-full overflow-hidden",
      elements: [
        "absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl",
        "absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
      ],
      grid: "absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"
    }
  }

  const currentVariant = variants[variant]

  return (
    <>
      <div className={cn(currentVariant.container, className)}>
        {currentVariant.elements.map((element, index) => (
          <div key={index} className={element}></div>
        ))}
      </div>
      {currentVariant.grid && (
        <div className={currentVariant.grid}></div>
      )}
    </>
  )
} 