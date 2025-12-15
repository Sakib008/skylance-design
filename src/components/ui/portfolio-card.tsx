import { cn } from "@/lib/utils";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  // Remove "height" prop entirely. We will control height via className.
  className?: string;
}

export default function PortfolioCard({
  title,
  description,
  imageSrc,
  imageAlt,
  technologies,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group w-full relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300",
        "h-80", // Default height (fallback)
        className // Your override (e.g., h-[600px]) will now win because 'cn' handles the conflict
      )}
    >
      {/* Image container needs to fill the parent height */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={false}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-md border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
