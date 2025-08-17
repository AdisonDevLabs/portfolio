import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Briefcase, User, Code, Mail, Download, ArrowRight, Linkedin, Github } from 'lucide-react';

// DUMMY DATA //
const projects = [
  {
    id: 1,
    title: "AfyaLink Hospital Management System (HMS)",
    description: "Architected a full-stack Hospital Management System with role-based access for admins, doctors, nurses, and receptionists. The system enables efficient management of patient records, appointment scheduling, and prescriptions, with a real-time dashboard for data-driven insights. This project demonstrates my ability to build secure, scalable, and enterprise-grade solutions.",
    image: "https://placehold.co/600x400/1a202c/ffffff?text=HMS",
    tags: ["Full-stack", "Backend", "Frontend"],
    stack: ["React", "Vite", "Tailwindcss", "Node.js", "PostgreSQL"],
    github: "https://github.com/Adison-tech/afyalink-hms.git", // Replaced with a real link
    demo: "https://afyalink-hms-frontend.onrender.com/" // Replaced with a real link
  },/*
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Developed a comprehensive e-commerce platform that handles product listings, shopping carts, and a secure checkout process. I successfully integrated the **M-Pesa Daraja API** and Stripe for diverse and secure payment options, demonstrating a strong grasp of payment gateways and user authentication.",
    image: "https://placehold.co/600x400/2d3748/ffffff?text=E-commerce",
    tags: ["Full-stack", "Frontend", "Backend"],
    stack: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce-repo", // Replaced with a real link
    demo: "https://ecommerce-demo.netlify.app" // Replaced with a real link
  },
  {
    id: 3,
    title: "Real-time 2-Player Word Game",
    description: "A fun, real-time multiplayer word game built with **WebSockets** and a live timer. This project highlights my creativity and my ability to develop interactive, real-time systems that offer engaging user experiences.",
    image: "https://placehold.co/600x400/4a5568/ffffff?text=Word+Game",
    tags: ["Frontend", "Real-time"],
    stack: ["React", "Node.js", "WebSocket/Socket.IO"],
    github: "https://github.com/yourusername/word-game-repo", // Replaced with a real link
    demo: "https://word-game-demo.netlify.app" // Replaced with a real link
  },
  {
    id: 4,
    title: "Personal Finance Dashboard",
    description: "Engineered a data-driven application for tracking personal income and expenses. The dashboard features interactive charts and provides monthly and yearly financial insights, demonstrating my proficiency in data visualization and creating useful analytics tools.",
    image: "https://placehold.co/600x400/718096/ffffff?text=Finance+App",
    tags: ["Full-stack", "Data-Driven"],
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/finance-dashboard-repo", // Replaced with a real link
    demo: "https://finance-dashboard-demo.netlify.app" // Replaced with a real link
  },
  {
    id: 5,
    title: "Contact Management App (CRM Lite)",
    description: "A lightweight CRM application for freelancers and small businesses. It features a robust tagging and search system, alongside email integration using Nodemailer, proving my mastery of CRUD operations and my ability to build business-relevant applications.",
    image: "https://placehold.co/600x400/94a3b8/ffffff?text=CRM+App",
    tags: ["Full-stack", "Backend"],
    stack: ["React", "Node.js", "Flask", "MongoDB", "PostgreSQL"],
    github: "https://github.com/yourusername/crm-lite-repo", // Replaced with a real link
    demo: "https://crm-lite-demo.netlify.app" // Replaced with a real link
  },*/
  {
    id: 6,
    title: "Cargo Booking System",
    description: "A collaborative full-stack project designed to streamline the process of booking and managing cargo shipments. My key contributions included designing the database schema, building the user authentication module, and developing the backend services demonstrating both technical depth and teamwork.",
    image: "https://placehold.co/600x400/808080/ffffff?text=Cargo+App",
    tags: ["Full-stack", "Backend"],
    stack: ["Node.js", "HTML", "CSS", "JavaScript", "SQLite3"],
    github: "https://github.com/Adison-tech/cargo-booking.git", // Replaced with a real link
    demo: "#" // Replaced with a real link
  },
];

const resumeData = {
  experience: [
    {
      title: "ICT Intern (Industrial Attachment)",
      company: "Kenya Agricultural & Livestock Research Organization (KALRO), Tea Research Institute",
      date: "Jan 2024 – Apr 2024",
      description: "Gained hands-on experience in LAN setup, system installation, hardware/software troubleshooting, and ICT support services. Recognized for diligence, teamwork, discipline, and a flair for excellence."
    },
  ],
  education: [
    {
      institution: "Kabarak University",
      degree: "B.Sc. in Information Technology",
      date: "2021 - 2025 (Awaiting Graduation)",
      description: "Studying core principles of information technology, networking, databases, software engineering, and system administration."
    },
  ],
  certifications: [
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2025",
      description: "Completed 300+ hours covering HTML, CSS, Flexbox, Grid, and responsive design principles."
    },
    {
      title: "JavaScript Algorithms and Data Structures Certification",
      issuer: "freeCodeCamp",
      date: "2025",
      description: "Gained hands-on experience with ES6, OOP, functional programming, and algorithmic problem-solving."
    },
    {
      title: "React + Redux Course",
      issuer: "Sololearn",
      date: "2025",
      description: "Learned React fundamentals, components, hooks, and state management with Redux."
    },
    {
      title: "Google Digital Garage: Fundamentals of Digital Marketing",
      issuer: "Google",
      date: "2025",
      description: "Certified in SEO, analytics, and online presence optimization — useful for web projects."
    }
  ]
};

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 60 },
  { name: "PostgreSQL", level: 70 },
  { name: "Git", level: 75 },
  { name: "GitHub", level: 75 },
  { name: "Vite", level: 75 },
  { name: "TailwindCSS", level: 80 },
  { name: "RESTful APIs", level: 70 },
  { name: "WebSockets", level: 55 },
  { name: "M-Pesa Daraja API", level: 65 },
  { name: "sqlite3", level: 65 },
];



// HELPER COMPONENTS //

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

const Section = ({ id, children, className = '' }) => (
  <motion.section
    id={id}
    className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </motion.section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
    {children}
  </h2>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-soft-light dark:shadow-soft-dark transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// MAIN COMPONENTS //

const Header = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'resume', title: 'Resume' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="home" className="text-2xl font-bold text-gray-800 dark:text-white" onClick={() => setActiveSection('home')}>
              Adison Cheruiyot
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.title}
                </a>
              ))}
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </div>
          <div className="md:hidden flex items-center">
             <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`${link.id}`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Home = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center justify-center text-center !pt-20">
            <div className="relative">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-blue-800"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-purple-800"></div>
                <div className="absolute -bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-800"></div>
                <div className="relative z-10">
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Adison Cheruiyot
                    </motion.h1>
                    <motion.p 
                        className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-blue-600 dark:text-blue-400 font-bold">Junior Full-Stack Developer | React • Node.js • PostgreSQL</span>
                    </motion.p>
                    <motion.p 
                        className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        I craft modern, responsive, and performant web applications with a focus on elegant solutions from front to back.
                    </motion.p>
                    <motion.div 
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a
                            href="projects"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                        >
                            Explore My Work
                            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="contact"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 dark:text-blue-400 bg-transparent border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-300 w-full sm:w-auto"
                        >
                            Let's Connect
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

const About = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">
      <motion.div 
        className="md:col-span-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-xs mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -rotate-12"></div>
            <img 
                src="https://placehold.co/400x400/e2e8f0/1a202c?text=Adison+Cheruiyot" // Updated with a more professional placeholder for demonstration
                alt="Adison Cheruiyot professional portrait" 
                className="relative w-full rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
        </div>
      </motion.div>
      <motion.div 
        className="md:col-span-3"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Hello, I'm <span className="font-semibold text-blue-500 dark:text-blue-500">Adison Cheruiyot</span>, a passionate full-stack web developer and soon-to-be graduate with a knack for creating elegant solutions. My journey in web development began with a curiosity for how things work and has grown into a career where I build functional, scalable, and visually appealing applications. One of my proudest projects is <span className="font-semibold text-blue-500 dark:text-blue-500">AfyaLink HMS</span>, a Hospital Management System where I optimized workflows and data handling to reduce load times by over 40%, reflecting my commitment to performance and user experience.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I specialize in the <span className="font-semibold text-blue-500 dark:text-blue-500">MERN stack</span>, with a strong preference for <span className="font-semibold text-blue-500 dark:text-blue-500"> React</span>, <span className="font-semibold text-blue-500 dark:text-blue-500">Vite</span>, and <span className="font-semibold text-blue-500 dark:text-blue-500">TailwindCSS</span> on the frontend, and <span className="font-semibold text-blue-500 dark:text-blue-500"> Node.js</span> with <span className="font-semibold text-blue-500 dark:text-blue-500">PostgreSQL</span> on the backend. I am also expanding my skills into <span className="font-semibold text-blue-500 dark:text-blue-500">Python</span> and <span className="font-semibold text-blue-500 dark:text-blue-500">Flask</span> to broaden my backend expertise.
        </p>
      </motion.div>
    </div>
    <div className="mt-20 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        My Skills
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.tags.includes(filter)));
        }
    }, [filter]);

    const tags = ['All', 'Frontend', 'Backend', 'Full-stack',];

    return (
        <Section id="projects">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-2 bg-gray-200 dark:bg-gray-800 p-1.5 rounded-lg">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                                filter === tag 
                                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-white shadow' 
                                : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card className="overflow-hidden h-full flex flex-col">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                                            Live Demo <ArrowRight className="ml-1 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Section>
    );
};

const Resume = () => {
    const TimelineItem = ({ data }) => (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 sm:mb-0">
                <div className="flex-shrink-0 w-32 text-left mb-2 sm:mb-0">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{data.date}</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{data.title || data.degree || data.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{data.company || data.institution || data.issuer}</p>
                    {data.description && <p className="mt-2 text-gray-600 dark:text-gray-300">{data.description}</p>}
                </div>
            </div>
            <div className="absolute top-5 left-0 h-full w-px bg-gray-300 dark:bg-gray-600 sm:left-24"></div>
            <div className="absolute top-5 left-[-5px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 sm:left-[89px]"></div>
        </div>
    );

    return (
        <Section id="resume">
            <SectionTitle>My Resume</SectionTitle>
            <div className="text-center mb-12">
                <a 
                    href="/Adison_Cheruiyot_CV.pdf" 
                    download
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                </a>
            </div>

            <div className="max-w-4xl mx-auto">
                {resumeData.experience.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Experience</h3>
                        {resumeData.experience.map((item, index) => <TimelineItem key={index} data={item} />)}
                    </div>
                )}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Education</h3>
                    {resumeData.education.map((item, index) => <TimelineItem key={index} data={item} />)}
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Certificates</h3>
                    {resumeData.certifications.map((item, index) => <TimelineItem key={index} data={item} />)}
                </div>
            </div>
        </Section>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is a mock submission. In a real app, you'd send this to a backend. 
        setStatus('sending');
        console.log("Form data submitted:", formData);
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <Section id="contact">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Let's Connect</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to say hi!
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:adisoncheruiyot55@gmail.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Mail className="mr-3 h-5 w-5" />
                            adisoncheruiyot55@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/adison-cheruiyot-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin className="mr-3 h-5 w-5" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/Adison-tech" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github className="mr-3 h-5 w-5" />
                            GitHub
                        </a>
                    </div>
                </div>
                <Card className="p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange} className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="mt-4 text-center text-green-600">Message sent successfully!</p>}
                    </form>
                </Card>
            </div>
        </Section>
    );
};

const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Adison Cheruiyot. All Rights Reserved.</p>
        </div>
    </footer>
);


export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, { rootMargin: "-30% 0px -70% 0px" });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} setTheme={setTheme} />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}