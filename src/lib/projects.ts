export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  category:
    | "Healthcare"
    | "E-Commerce"
    | "SaaS"
    | "Real Estate"
    | "Education"
    | "Hospitality"
    | "Food & Beverage"
    | "Fashion";
  liveUrl: string;
  githubUrl: string;
  caseStudy: {
    challenge: string;
    solution: string;
    outcomes: string[];
    features: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "bhanu-dental",
    title: "Bhanu Dental Clinic",
    description:
      "A complete digital rebrand and booking system for a premium dental practice.",
    image:
      "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Healthcare",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The clinic's old site was non-responsive and lacked an appointment system, leading to high phone call volume and missed bookings.",
      solution:
        "We built a mobile-first site with a custom 'Request Appointment' flow that integrates directly with their front desk email, reducing friction for patients.",
      outcomes: [
        "40% increase in online inquiries",
        "Reduced phone volume by 25%",
        "Page load speed improved to 0.8s",
      ],
      features: [
        "Custom Appointment Form",
        "Service Showcase",
        "Testimonial Slider",
        "Local SEO Optimization",
      ],
    },
  },
  {
    slug: "fitz-yoga-studio",
    title: "Fitz Yoga Studio",
    description:
      "Hybrid booking and mentorship platform for a luxury yoga brand.",
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Three.js", "GSAP", "Stripe"],
    video:
      "https://res.cloudinary.com/de0bt7qfe/video/upload/v1766120134/Fitz_yoga_studio_itz9qh.mp4",
    category: "Education",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The studio needed to serve two distinct audiences: local women for walk-in classes and global clients for 1-on-1 online mentorship, without cluttering the user interface.",
      solution:
        "Designed a 'Modern Luxury' aesthetic using sage green and gold accents. Implemented a dual-user flow and a Bento Grid schedule layout to reduce decision fatigue.",
      outcomes: [
        "Streamlined booking for hybrid classes",
        "High-ticket personal training inquiries increased",
        "Premium brand positioning established",
      ],
      features: [
        "Hybrid Booking System (Online/Offline)",
        "3D Hero Animation",
        "Personalized Mentor Matching",
        "Automated WhatsApp Reminders",
      ],
    },
  },
  {
    slug: "oreliya-jewellery",
    title: "Oreliya Jewellery",
    description:
      "Immersive e-commerce experience with 3D visualization for bespoke jewelry.",
    image:
      "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "MongoDB", "Cloudinary", "AWS Lambda"],
    category: "Fashion",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Customers were hesitant to purchase high-value custom jewelry online due to a lack of trust and the inability to visualize complex designs.",
      solution:
        "Built a trust-focused UI with high-resolution imagery and 3D rotating product models. Created a seamless 'Design Your Own' flow to capture custom orders.",
      outcomes: [
        "Increased consumer trust for high-ticket items",
        "30% uplift in custom design inquiries",
        "Zero-latency image loading",
      ],
      features: [
        "3D Product Viewer",
        "Custom Design Request Flow",
        "Virtual Try-On Integration",
        "Secure Payment Gateway",
      ],
    },
  },
  {
    slug: "Golden-spoon-restaurant",
    title: "Golden Spoon Restaurant",
    description:
      "Mobile-first dining platform focusing on visual appetite appeal and rapid reservations.",
    video:
      "https://res.cloudinary.com/de0bt7qfe/video/upload/v1766120142/Golden_Spoon_Restaurant_lsmhg7.mp4",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Tailwind CSS", "OpenTable API"],
    category: "Hospitality",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The restaurant was losing potential diners who found the old PDF menus difficult to read on mobile devices, leading to high bounce rates.",
      solution:
        "Developed a responsive, visual-first digital menu with instant 'Book a Table' functionality and high-quality food photography integration.",
      outcomes: [
        "Faster table turnover",
        "Reduced phone booking friction",
        "Higher average order value due to visual menu",
      ],
      features: [
        "Visual Digital Menu",
        "Instant Table Reservation",
        "One-Tap Call & Directions",
        "Seasonal Specials Highlight",
      ],
    },
  },
  {
    slug: "the-pure-jam",
    title: "The Pure Jam",
    description:
      "Niche artisanal e-commerce site with bold branding and immersive product storytelling.",
    video:
      "https://res.cloudinary.com/de0bt7qfe/video/upload/v1766120125/loom-video-vidburner.com_2_vp7dal.mp4",
    image:
      "https://images.pexels.com/photos/48817/raspberries-fruit-berries-food-48817.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "React Three Fiber", "Shopify API"],
    category: "Food & Beverage",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Standing out in a crowded FMCG market with a simple product required a memorable digital presence that conveyed freshness and organic quality.",
      solution:
        "Created a playful, immersive brand experience with floating 3D fruit elements and a bold red/brown color palette to evoke natural authenticity.",
      outcomes: [
        "Memorable brand identity",
        "High engagement time on site",
        "Direct-to-consumer sales channel established",
      ],
      features: [
        "3D Floating Fruit Effects",
        "Subscription Box Logic",
        "Ingredient Origin Stories",
        "Bulk Order Management",
      ],
    },
  },
  {
    slug: "carolina-boutique",
    title: "Carolina Boutique",
    description:
      "Minimalist fashion retail site designed to mirror the curated in-store boutique experience.",
    image:
      "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Sanity CMS", "Stripe"],
    category: "Fashion",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The local boutique needed to expand sales beyond physical foot traffic without losing its curated, personal touch.",
      solution:
        "Translated the in-store 'curated' feel to digital using spacious layouts, editorial-style lookbooks, and a 'Shop the Look' feature.",
      outcomes: [
        "Expanded customer base beyond local area",
        "Real-time inventory synchronization",
        "Increased average cart size",
      ],
      features: [
        "Shop the Look",
        "Real-time Inventory Sync",
        "Curated Seasonal Lookbooks",
        "Instagram Feed Integration",
      ],
    },
  },
  {
    slug: "dentelle-dental-clinic",
    title: "Dentelle",
    description:
      "Premium dental clinic website focused on trust, hygiene, and effortless appointment booking.",
    image:
      "https://images.pexels.com/photos/6812551/pexels-photo-6812551.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    category: "Healthcare",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "The clinic needed a modern online presence that matched its luxury interior branding and made it easy for patients to understand treatments and book appointments without calling.",
      solution:
        "Designed a clean, luxury UI using golden yellow, lite pink, and sky blue accents, with clear service explanations, trust badges, and a prominent 'Book Now' workflow on both desktop and mobile.",
      outcomes: [
        "Stronger premium brand perception for the clinic",
        "Simplified booking journey for new and returning patients",
        "Website structure optimized for future Google ranking and SEO",
      ],
      features: [
        "One-click Appointment Booking",
        "Service Explainers with Icons & Images",
        "Doctor & Team Profiles",
        "WhatsApp & Call CTAs on Every Page",
      ],
    },
  },
  {
    slug: "al-fushan",
    title: "Al Fushan Clothing",
    description:
      "High-performance food ordering platform for a busy multi-location restaurant.",
    image:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Firebase", "Stripe"],
    category: "E-Commerce",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Third-party delivery apps were taking 30% commissions. The client needed their own direct ordering channel.",
      solution:
        "We developed a custom ordering PWA (Progressive Web App) that allows customers to order directly, saving the client commission fees.",
      outcomes: [
        "Saved $2,000/month in commissions",
        "Owned customer data for marketing",
        "15% higher average order value",
      ],
      features: [
        "Real-time Order Tracking",
        "Menu Management CMS",
        "Mobile-First Ordering",
        "Loyalty Program",
      ],
    },
  },
  {
    slug: "yoga-arts-life",
    title: "Yoga Arts Life",
    description:
      "Minimalist booking and class management platform for a luxury yoga studio.",
    image:
      "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Sanity CMS", "Stripe"],
    category: "Education", // Fitting category for classes
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Students found it difficult to view class schedules and book specific instructors on mobile devices.",
      solution:
        "A serene, minimalist interface that prioritizes the schedule. We used Sanity CMS so the studio owner can easily update classes weekly.",
      outcomes: [
        "Double the mobile bookings",
        "Zero maintenance required for schedule updates",
        "Brand aligned with studio aesthetic",
      ],
      features: [
        "Dynamic Weekly Schedule",
        "Instructor Profiles",
        "Class Pack Purchases",
        "Blog Integration",
      ],
    },
  },
  // ... Keep existing generic ones if you need fillers, but prioritize the above 3
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Pro",
    description:
      "Real-time data visualization dashboard for enterprise clients.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "D3.js"],
    category: "SaaS",
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: {
      challenge:
        "Enterprise users needed to visualize complex datasets without lag.",
      solution:
        "We implemented a virtualized list architecture and used D3.js for GPU-accelerated charts.",
      outcomes: [
        "Rendered 10k+ data points instantly",
        "Improved user retention by 20%",
        "Reduced server load",
      ],
      features: [
        "Dark/Light Mode",
        "Export to PDF",
        "Real-time WebSockets",
        "Role-based Access",
      ],
    },
  },
];
