export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
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
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    category: "E-Commerce",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The client needed a scalable e-commerce platform that could handle thousands of products and concurrent users while maintaining fast load times and a seamless checkout experience.",
      solution:
        "We built a headless commerce architecture using Next.js for the frontend and a custom Node.js backend. We implemented server-side rendering for SEO and optimized image loading for performance.",
      outcomes: [
        "50% increase in mobile conversion rate",
        "Load time reduced by 40%",
        "Successfully handled 10k+ daily users",
      ],
      features: [
        "Advanced product filtering and search",
        "Real-time inventory management",
        "Secure Stripe payment integration",
        "Custom admin dashboard for order management",
      ],
    },
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard for a SaaS platform with real-time data visualization.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    category: "SaaS",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Users were struggling to make sense of complex data sets. The goal was to create an intuitive dashboard that presents real-time analytics in an actionable way.",
      solution:
        "We utilized React and Chart.js to create interactive data visualizations. We implemented WebSocket connections for real-time data updates without page refreshes.",
      outcomes: [
        "User engagement increased by 35%",
        "Support tickets related to data confusion dropped by 60%",
        "Real-time data latency reduced to <100ms",
      ],
      features: [
        "Interactive charts and graphs",
        "Customizable widget layout",
        "Real-time data streaming",
        "Exportable reports (PDF/CSV)",
      ],
    },
  },
  {
    slug: "healthcare-app",
    title: "Healthcare App",
    description: "Patient management system with appointment scheduling and medical records.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    category: "Healthcare",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The clinic needed a secure and HIPAA-compliant system to manage patient records and streamline the appointment booking process, which was previously done manually.",
      solution:
        "We developed a secure web application using Next.js and PostgreSQL. We implemented role-based access control and encrypted all sensitive patient data.",
      outcomes: [
        "Administrative time reduced by 20 hours/week",
        "Appointment no-shows reduced by 25%",
        "100% HIPAA compliance audit score",
      ],
      features: [
        "Online appointment scheduling",
        "Secure patient portal",
        "Electronic Health Records (EHR) integration",
        "Automated appointment reminders",
      ],
    },
  },
  {
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and agent profiles.",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "MongoDB", "Express", "AWS"],
    category: "Real Estate",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Potential buyers wanted to view properties remotely before visiting. The platform needed to support high-quality virtual tours and fast property searches.",
      solution:
        "We integrated a 3D virtual tour viewer and built a robust search engine using MongoDB. We optimized media delivery using AWS S3 and CloudFront.",
      outcomes: [
        "Property viewing requests increased by 45%",
        "Average time on site increased by 3 minutes",
        "Faster sales cycle for listed properties",
      ],
      features: [
        "360-degree virtual tours",
        "Map-based property search",
        "Agent messaging system",
        "Saved searches and alerts",
      ],
    },
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    description: "Online education platform with course creation, progress tracking, and video streaming.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Supabase", "Video.js", "Stripe"],
    category: "Education",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Instructors needed an easy way to upload courses, and students needed a reliable platform for streaming video content without buffering.",
      solution:
        "We built a platform using Supabase for the backend and storage. We integrated a specialized video hosting service for adaptive bitrate streaming.",
      outcomes: [
        "Over 500 courses created in the first month",
        "Student completion rates improved by 15%",
        "Zero downtime during peak usage",
      ],
      features: [
        "Drag-and-drop course builder",
        "Student progress dashboards",
        "Quizzes and assessments",
        "Certificate generation",
      ],
    },
  },
  {
    slug: "restaurant-booking-app",
    title: "Restaurant Booking App",
    description: "Table reservation system with menu display, online ordering, and payment processing.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Firebase", "PayPal", "PWA"],
    category: "Restaurant",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The restaurant wanted to reduce phone reservations and offer a seamless mobile experience for ordering and booking.",
      solution:
        "We developed a Progressive Web App (PWA) that works offline and feels like a native app. We used Firebase for real-time table availability.",
      outcomes: [
        "Online reservations now account for 70% of bookings",
        "Phone call volume reduced by 50%",
        "Average order value increased by 10% via app",
      ],
      features: [
        "Real-time table reservation",
        "Digital menu with ordering",
        "Loyalty points system",
        "Push notifications for order status",
      ],
    },
  },
]
