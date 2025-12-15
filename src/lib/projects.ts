export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  category: "Healthcare" | "E-Commerce" | "SaaS" | "Real Estate" | "Education" | "Restaurant"
  liveUrl: string
  githubUrl: string
  caseStudy: {
    challenge: string
    solution: string
    outcomes: string[]
    features: string[]
  }
}

export const projects: Project[] = [
  {
    slug: "bhanu-dental",
    title: "Bhanu Dental Clinic",
    description: "A complete digital rebrand and booking system for a premium dental practice.",
    image: "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Healthcare",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge: "The clinic's old site was non-responsive and lacked an appointment system, leading to high phone call volume and missed bookings.",
      solution: "We built a mobile-first site with a custom 'Request Appointment' flow that integrates directly with their front desk email, reducing friction for patients.",
      outcomes: ["40% increase in online inquiries", "Reduced phone volume by 25%", "Page load speed improved to 0.8s"],
      features: ["Custom Appointment Form", "Service Showcase", "Testimonial Slider", "Local SEO Optimization"]
    }
  },
  {
    slug: "al-fushan",
    title: "Al Fushan Restaurant",
    description: "High-performance food ordering platform for a busy multi-location restaurant.",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Firebase", "Stripe"],
    category: "Restaurant",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge: "Third-party delivery apps were taking 30% commissions. The client needed their own direct ordering channel.",
      solution: "We developed a custom ordering PWA (Progressive Web App) that allows customers to order directly, saving the client commission fees.",
      outcomes: ["Saved $2,000/month in commissions", "Owned customer data for marketing", "15% higher average order value"],
      features: ["Real-time Order Tracking", "Menu Management CMS", "Mobile-First Ordering", "Loyalty Program"]
    }
  },
  {
    slug: "yoga-arts-life",
    title: "Yoga Arts Life",
    description: "Minimalist booking and class management platform for a luxury yoga studio.",
    image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Sanity CMS", "Stripe"],
    category: "Education", // Fitting category for classes
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge: "Students found it difficult to view class schedules and book specific instructors on mobile devices.",
      solution: "A serene, minimalist interface that prioritizes the schedule. We used Sanity CMS so the studio owner can easily update classes weekly.",
      outcomes: ["Double the mobile bookings", "Zero maintenance required for schedule updates", "Brand aligned with studio aesthetic"],
      features: ["Dynamic Weekly Schedule", "Instructor Profiles", "Class Pack Purchases", "Blog Integration"]
    }
  },
  // ... Keep existing generic ones if you need fillers, but prioritize the above 3
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Pro",
    description: "Real-time data visualization dashboard for enterprise clients.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "D3.js"],
    category: "SaaS",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge: "Enterprise users needed to visualize complex datasets without lag.",
      solution: "We implemented a virtualized list architecture and used D3.js for GPU-accelerated charts.",
      outcomes: ["Rendered 10k+ data points instantly", "Improved user retention by 20%", "Reduced server load"],
      features: ["Dark/Light Mode", "Export to PDF", "Real-time WebSockets", "Role-based Access"]
    }
  }
];
