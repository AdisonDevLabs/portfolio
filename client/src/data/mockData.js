export const projects = [
  {
    id: 1,
    title: "AfyaLink Hospital Management System (HMS)",
    description: "A secure, multi-tier healthcare infrastructure engineered to solve the risks of managing sensitive patient data across multiple departments. By implementing strict role-based access control (RBAC) and automated scheduling within a PERN stack architecture, the system ensures data integrity and provides the real-time operational insights necessary for modern clinical management.",
    image: "/hms.png",
    tags: ["Full-stack", "Security", "Operations"],
    stack: ["React", "Vite", "Tailwindcss", "Node.js", "PostgreSQL"],
    github: "https://github.com/Adison-tech/afyalink-hospital-management-system.git",
    demo: "https://afyalink-hms.onrender.com/"
  },/*
  {
    id: 2,
    title: "Logistics Engine: Cargo Booking System",
    description: "An operational logistics platform designed to manage high-stakes international shipments with backend precision. Focused on relational database integrity and secure authentication, the system streamlines cargo tracking and ensures that sensitive transit data remains accurate and accessible only to authorized personnel.",
    image: "https://placehold.co/600x400/808080/ffffff?text=Cargo+App",
    tags: ["Full-stack", "Logistics", "Backend"],
    stack: ["Node.js", "HTML", "CSS", "JavaScript", "SQLite3"],
    github: "https://github.com/Adison-tech/cargo-booking.git",
    demo: "#"
  },*/
  {
    id: 3,
    title: "Tet Tea Factory: Industrial B2B Platform",
    description: "A high-performance B2B digital hub engineered to maintain institutional trust between a major industrial exporter and its 10,000+ stakeholders. The platform serves as a high-authority information hub for farmers and global buyers, prioritizing rapid load times and professional brand positioning to facilitate secure international trade.",
    image: "/tetteas-website.png", // Orange-500 tint
    tags: ["Frontend", "UI/UX"],
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Adison-tech/tetteas-website.git",
    demo: "https://tetteas-website.vercel.app/"
  },
];

export const resumeData = {
  experience: [
    {
      title: "ICT Associate (Industrial Attachment)",
      company: "Kenya Agricultural & Livestock Research Organization (KALRO), Tea Research Institute",
      date: "Jan 2024 – Apr 2024",
      description: "Facilitated technical operations for the Tea Research Institute. Responsible for LAN infrastructure maintenance, system installations, and hardware/software troubleshooting. Focused on ensuring organizational uptime and providing mission-critical ICT support across the research facility."
    },
  ],
  education: [
    {
      institution: "Kabarak University",
      degree: "B.Sc. in Information Technology",
      date: "2021 - 2026 (Final Year)",
      description: "Rigorous focus on system architecture, relational database design, and enterprise-level software engineering. Developed a deep understanding of full-stack development lifecycles and scalable IT infrastructure."
    },
  ],
  certifications: [// If you have specific certs from Coursera, Cisco, or FreeCodeCamp, list them here.
    // If empty, the component logic will hide this column.
    /*
    {
      title: "Full Stack Development Certification",
      issuer: "Credential Issuer Name",
      date: "2024",
      description: "Focused on advanced database management and RESTful API architecture."
    }
    */
  ]
};

export const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "Git", level: 75 },
  { name: "GitHub", level: 75 },
  { name: "TailwindCSS", level: 80 },
  { name: "RESTful APIs", level: 70 },
  { name: "WebSockets", level: 55 },
  { name: "sqlite3", level: 65 },
];

export const services = [
  {
    id: 1,
    title: "Full-Stack System Engineering",
    icon: "Layers",
    description: "Developing unified web platforms that bridge the gap between complex data logic and high-performance interfaces. I build systems designed to handle increasing traffic and operational scale using the PERN stack.",
    deliverables: ["Custom Enterprise Systems: Tailored tools like HMS, ERPs, and internal dashboards.", "Scalable Architecture: Built to remain stable as your user base grows.", "Performance Optimization: Reducing latency to improve user retention and SEO ranking."]
  },
  {
    id: 2,
    title: "Core Infrastructure & API Development",
    icon: "Server",
    description: "Engineering the backend foundation that powers your business logic. I design high-availability APIs and relational database structures optimized for speed, accuracy, and seamless integration.",
    deliverables: ["Relational Database Design: Specialized in PostgreSQL for data integrity.", "Third-Party Integrations: Connecting your platform with essential payment, logistics, or CRM tools.", "API Architecture: Designing secure, RESTful endpoints for web and mobile cross-compatibility."]
  },
  {
    id: 3,
    title: "Security & Risk Mitigation",
    icon: "ShieldCheck",
    description: "Protecting sensitive information through defensive engineering. I implement industry-standard protocols to ensure your business and your customers' data remain secure against external threats.",
    deliverables: ["Authentication & Access Control: Implementing multi-layered security for user data.", "Vulnerability Assessment: Identifying and patching security gaps before deployment.", "Data Encryption: Ensuring end-to-end privacy for sensitive records and transactions."]
  }
];


export const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager @ TechFlow",
    text: "Adison completely transformed our internal dashboard. His deep understanding of the PERN stack and attention to database performance reduced our load times by over 40%. An absolute professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartupX",
    text: "Working with Adison was seamless. He doesn't just write code; he thinks about the business logic and user experience. The secure API he built for us has been running flawlessly in production.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    role: "Director, AfyaLink Clinics",
    text: "The Hospital Management System Adison architected for us is incredibly robust. His focus on role-based security and clean UI made it incredibly easy for our medical staff to adopt.",
    rating: 5,
  }
];