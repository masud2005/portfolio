export interface Project {
  id: string;
  title: string;
  category: "website" | "saas" | "app" | "portfolio";
  categoryLabel: string;
  description: string;
  fullDescription: string;
  platform: string;
  duration: string;
  image: string;
  role: string;
  techStack: string[];
  liveUrl?: string;
  highlights: string[];
  layoutType: "wide" | "vertical";
  sortOrder: number;
  featured?: boolean;
  viewsCount?: number;
  createdAt?: string;
}

export const projectsData: Project[] = [
  // Row 1 - Left (Wide Card - 7 Columns)
  {
    id: "sajda-travel",
    title: "Sajda Travel & Tours",
    category: "website",
    categoryLabel: "Website",
    description:
      "A travel booking platform for Hajj, Umrah, and international tour packages with trusted planning and seamless booking.",
    fullDescription:
      "A comprehensive travel portal and booking management system built for pilgrimage and worldwide tour packages. Features an interactive package customizer, live currency conversion, dynamic hotel tiering, and instant PDF invoice generation.",
    platform: "Web Application",
    duration: "3 Months",
    image: "/projects/sajda_travel_exact.png",
    role: "Full Stack Development & UI/UX",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    liveUrl: "https://sajdatravel.com",
    highlights: [
      "Custom package configuration engine with live pricing",
      "Integrated multi-currency payment checkout",
      "Dynamic booking management and automated voucher generator",
    ],
    layoutType: "wide",
    sortOrder: 1,
    viewsCount: 1540,
    createdAt: "2024-03-01",
  },
  // Row 1 - Right (Vertical Card - 5 Columns)
  {
    id: "rakaz-corporate",
    title: "Rakaez Al Sarh Al Hadeeth",
    category: "website",
    categoryLabel: "Website",
    description:
      "A corporate website for a general contracting and building company based in Riyadh, shaping the future of constructio... in the Kingdom of Saudi Arabia.",
    fullDescription:
      "High-performance corporate web presence for a premier engineering and contracting firm in Riyadh, Saudi Arabia. Engineered with modern aesthetics, interactive project showcase galleries, and optimized bilingual content structure.",
    platform: "Web Application",
    duration: "2 Months",
    image: "/projects/rakaez_corporate_showcase.jpg",
    role: "Frontend Architect & Performance Optimization",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Engine"],
    liveUrl: "http://www.rakaez.llc",
    highlights: [
      "100/100 Google Lighthouse performance score",
      "Interactive 3D portfolio showcase with smooth transitions",
      "Bilingual Arabic / English corporate layout architecture",
    ],
    layoutType: "vertical",
    sortOrder: 2,
    viewsCount: 1420,
    createdAt: "2024-02-15",
  },
  // Row 2 - Left (Wide Card - 7 Columns)
  {
    id: "at-book-erp",
    title: "AT-Book",
    category: "saas",
    categoryLabel: "SaaS",
    description:
      "A smart accounting, HRM, and business management platform designed to simplify financial operations and enterprise business workflows.",
    fullDescription:
      "Multi-tenant SaaS operational platform integrating double-entry accounting, payroll computation, inventory sync, and real-time executive analytics for fast-growing businesses.",
    platform: "Web Application",
    duration: "4 Months",
    image: "/projects/at_book_erp_mockup_1788674401343.jpg",
    role: "Lead Full Stack & System Architect",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "Stripe"],
    highlights: [
      "Tenant database isolation with role-based access security",
      "Automated recurrent billing and financial reconciliation",
      "High-throughput sub-millisecond cached operational reports",
    ],
    layoutType: "wide",
    sortOrder: 3,
    viewsCount: 980,
    createdAt: "2024-01-20",
  },
  // Row 2 - Right (Vertical Card - 5 Columns)
  {
    id: "tabassum-ecommerce",
    title: "Tabassum Al Manarat E-commerce",
    category: "website",
    categoryLabel: "Website",
    description:
      "An e-commerce platform for laptops, gaming gear, and electronics with flash sales, smart search, and flexible payments.",
    fullDescription:
      "Consumer electronics e-commerce store with high concurrency flash sales management, instant product filtering by technical specs, automated coupon funnels, and real-time inventory locking during checkout.",
    platform: "Web Application",
    duration: "3 Months",
    image: "/projects/tabassum_ecommerce_mockup_1788674428021.jpg",
    role: "Full Stack Engineer & Payment Integration",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Tailwind CSS"],
    highlights: [
      "Optimized inventory locking to eliminate overselling during flash deals",
      "Instant faceted search filtering across thousands of SKUs",
      "Multi-gateway checkout supporting international and local cards",
    ],
    layoutType: "vertical",
    sortOrder: 4,
    viewsCount: 890,
    createdAt: "2023-12-10",
  },
  // Row 3 - Left (Wide Card - 7 Columns)
  {
    id: "al-tamam-pharma",
    title: "Al Tamam Pharma",
    category: "saas",
    categoryLabel: "SaaS",
    description:
      "Al-Tamam is an end-to-end digital pharmacy management solution designed to simplify and connect every part of a modern pharmacy business.",
    fullDescription:
      "Enterprise digital pharmacy management ecosystem connecting prescription uploads, batch expiry tracking, supplier wholesale ordering, and customer delivery logistics into a unified cloud interface.",
    platform: "Web Application",
    duration: "4 Months",
    image: "/projects/pharma_platform_mockup_1788674442999.jpg",
    role: "Full Stack Architect",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
    highlights: [
      "Batch tracking with automated expiry alerts and replenishment triggers",
      "Prescription review queue with pharmacist verification workflows",
      "Centralized POS sync across multiple physical branches",
    ],
    layoutType: "wide",
    sortOrder: 5,
    viewsCount: 750,
    createdAt: "2023-11-05",
  },
  // Row 3 - Right (Vertical Card - 5 Columns)
  {
    id: "solutions-contracting",
    title: "Solutions Contracting Group",
    category: "website",
    categoryLabel: "Website",
    description:
      "A professional corporate website presenting integrated contracting, construction, engineering, and project support services.",
    fullDescription:
      "Modern brand presentation and bid-procurement portal for large-scale civil engineering projects. Features interactive project maps, timeline milestones, and client inquiry pipelines.",
    platform: "Web Application",
    duration: "1 Months",
    image: "/projects/solutions_contracting_mockup_1788674719710.jpg",
    role: "Frontend Developer & UI Specialist",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    highlights: [
      "Responsive mega-menu and interactive project inspection modal",
      "Corporate brand styling tailored for high-ticket tender inquiries",
      "Optimized asset delivery with 99+ mobile usability rating",
    ],
    layoutType: "vertical",
    sortOrder: 6,
    viewsCount: 620,
    createdAt: "2023-10-18",
  },
];
