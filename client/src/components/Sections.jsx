import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Code2, Terminal, GraduationCap, Layers, Server, ShieldCheck, Check, ChevronLeft, ChevronRight, Star, Quote, Download, Briefcase, Award, Mail, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react';
import { Section, SectionTitle, Card } from './SharedUI';
import { projects, resumeData, skills, services, testimonials } from '../data/mockData';
import { GitHubGraph } from './GitHubGraph';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, 
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Subtle radial glow to prevent the black from feeling "dead" */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(249,115,22,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_-20%,_rgba(249,115,22,0.15),transparent)] -z-10"></div>

      <motion.div
        className="max-w-5xl mx-auto w-full flex flex-col items-start pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge - Now using Orange-500 for the indicator and text */}
        <motion.div 
          variants={itemVariants} 
          className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-orange-500/20 bg-white/50 dark:bg-orange-500/5 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
          </span>
          <span className="text-xs font-bold text-gray-600 dark:text-orange-500 tracking-widest uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* High-Impact Typography - Black & White Contrast */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-[1.05]">
            Adison Cheruiyot.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-400 dark:text-white/40 leading-[1.1] mt-8">
            Building the technical systems that power your business.
          </h2>
        </motion.div>

        {/* Focused Subheadline */}
        <motion.p 
          variants={itemVariants} 
          className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-white/60 leading-relaxed font-light mb-12"
        >
          I develop custom full-stack web applications designed to solve operational bottlenecks and professionalize your digital presence. Using the <span className="font-medium text-gray-900 dark:text-orange-500">PERN Stack Technologies</span>. I build tools that are fast, secure, and engineered to scale as your company grows.
        </motion.p>

        {/* Sleek CTA Buttons - Orange-500 as the primary action color */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-orange-500 text-white dark:text-black rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300 ease-out shadow-xl shadow-orange-500/10"
          >
            Explore Solutions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          
          <a
            href="#contact"
            className="text-gray-600 dark:text-white/80 font-medium text-sm sm:text-base hover:text-gray-900 dark:hover:text-orange-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-900 dark:after:bg-orange-500 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Reusable wrapper for that premium bento box feel
const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    className={`bg-white dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-3xl p-8 overflow-hidden relative group hover:border-gray-300 dark:hover:border-orange-500/30 transition-colors duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Systems & Reliability.
        </h2>
        <p className="text-gray-500 dark:text-white/40 max-w-xl text-lg font-light">
          A technical overview of the infrastructure and operational logic I bring to every project.
        </p>
      </motion.div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* Main Bio Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between" delay={0.1}>
          <div>
            <Terminal className="w-8 h-8 text-gray-400 dark:text-orange-500/50 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
              Engineering Business Assets.
            </h3>
            <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-4 text-lg">
              I build full-stack web systems for businesses that require high-performance digital tools. Specializing in the **PERN stack**, I focus on creating secure, scalable infrastructure designed to handle complex data and grow alongside your operations.
            </p>
            <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed text-lg">
              Whether I’m automating internal workflows or developing a robust digital presence, my goal is the same: <span className="text-gray-900 dark:text-orange-500 font-medium">delivering high-performance, user-centric, reliable software that serves as a long-term asset, not just a technical expense.</span>
            </p>
          </div>
        </BentoCard>

        {/* Location & Time Card - Swapped Blue for Orange glow */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center bg-gray-50/50 dark:bg-orange-500/5" delay={0.2}>
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 rounded-full"></div>
            <MapPin className="w-10 h-10 text-orange-500 relative z-10" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Nakuru, Kenya</h3>
          <p className="text-sm text-gray-500 dark:text-white/40 mt-1 font-mono">Operation Base: EAT Timezone | Reliable Remote Collaboration</p>
        </BentoCard>

        {/* Education/Current Status Card */}
        <BentoCard className="md:col-span-1 md:row-span-1" delay={0.3}>
          <GraduationCap className="w-6 h-6 text-gray-400 dark:text-orange-500/50 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Technical Foundation</h3>
          <p className="text-gray-600 dark:text-white/60 font-light text-sm">
            Final-year B.Sc. Information Technology at <span className="font-medium text-gray-900 dark:text-white">Kabarak University</span>. Focused on system architecture and data integrity.
          </p>
        </BentoCard>

        {/* Tech Stack Card */}
        <BentoCard className="md:col-span-2 lg:col-span-2 md:row-span-1" delay={0.4}>
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-5 h-5 text-gray-400 dark:text-orange-500/50" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider">Core Technical Stack</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill.name} 
                className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-orange-500/10 text-gray-800 dark:text-orange-500 rounded-full border border-transparent dark:border-orange-500/20 hover:border-gray-300 dark:hover:border-orange-500 transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* GitHub Graph Card 
        <div className="md:col-span-3 lg:col-span-4 mt-2">
          <GitHubGraph />
        </div>
        */}
      </div>
    </section>
  );
};


export const Services = () => {
  // Map string names from our data to actual Lucide components
  const IconMap = {
    Layers: Layers,
    Server: Server,
    ShieldCheck: ShieldCheck
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Services & Specialized Solutions
        </h2>
        <p className="text-gray-500 dark:text-white/40 max-w-2xl text-lg font-light mx-auto md:mx-0">
          I provide the technical infrastructure that allows businesses to scale operations and professionalize their digital footprint.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((service) => {
          const IconComponent = IconMap[service.icon];
          
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group bg-white dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-3xl p-8 sm:p-10 hover:border-orange-500/50 transition-colors duration-500 flex flex-col h-full relative overflow-hidden"
            >
              {/* Refined orange background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-orange-500/10 border border-gray-100 dark:border-orange-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                  <IconComponent className="w-6 h-6 text-gray-900 dark:text-orange-500" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Deliverables Checklist - Updated to Orange-500 */}
                <ul className="space-y-3 mt-auto pt-6 border-t border-gray-100 dark:border-orange-500/20">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-white/80">
                      <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};


export const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.tags.includes(filter)));
        }
    }, [filter]);

    const tags = ['All', 'Frontend', 'Backend', 'Full-stack'];

    return (
        <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
            {/* Header & Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
            >
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                        Strategic Solutions
                    </h2>
                    <p className="text-gray-500 dark:text-white/40 max-w-xl text-lg font-light">
                        A selection of systems engineered to solve operational challenges and provide secure, scalable infrastructure.
                    </p>
                </div>

                {/* Minimalist Pill Filters - Updated to Orange-500 */}
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                filter === tag
                                ? 'bg-gray-900 text-white dark:bg-orange-500 dark:text-black'
                                : 'bg-transparent text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-orange-500/10'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col"
                        >
                            {/* Premium Image Container - Border updated to Orange tint */}
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-orange-500/10 aspect-[4/3] mb-6 bg-gray-100 dark:bg-black">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                                />
                                {/* Subtle overlay interaction - Orange glow */}
                                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 dark:group-hover:bg-orange-500/5 transition-colors duration-500 pointer-events-none"></div>
                            </div>

                            {/* Minimalist Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3 gap-4">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-snug">
                                        {project.title}
                                    </h3>
                                    {/* Icon Links - Updated hover to Orange-500 */}
                                    <div className="flex items-center gap-3 shrink-0 mt-1">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-orange-500 transition-colors" aria-label="View Source">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-orange-500 transition-colors" aria-label="Live Demo">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Clean Tech Stack Labels - Updated to Orange-500 theme */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-orange-500/10 text-gray-600 dark:text-orange-500 rounded-md border border-gray-200 dark:border-orange-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};


export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: 20,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      zIndex: 0,
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Client Words.
          </h2>
          <p className="text-gray-500 dark:text-white/40 max-w-xl text-lg font-light">
            Don't just take my word for it. Here is what people I've worked with have to say.
          </p>
        </motion.div>

        {/* Minimalist Navigation Controls - Updated to Orange-500 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full border border-gray-200 dark:border-orange-500/10 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-orange-500/10 hover:text-gray-900 dark:hover:text-orange-500 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full border border-gray-200 dark:border-orange-500/10 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-orange-500/10 hover:text-gray-900 dark:hover:text-orange-500 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* The Slider Container - Pure Black with Orange Glow border */}
      <div className="relative min-h-[300px] sm:min-h-[250px] w-full bg-gray-50 dark:bg-black rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-100 dark:border-orange-500/10 flex items-center">
        {/* Massive background quote mark - Subtle Orange tint */}
        <Quote className="absolute top-8 left-8 w-24 h-24 text-gray-200 dark:text-orange-500/5 opacity-50 -z-10 transform -scale-x-100" />
        
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col"
          >
            {/* The Quote */}
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-white font-light leading-relaxed mb-8 tracking-tight">
              "{testimonials[currentIndex].text}"
            </h3>
            
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author Info */}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-500 dark:text-white/40 text-sm font-medium uppercase tracking-wider mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              {/* Star Rating - Updated to Orange-500 */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators - Updated to Orange-500 */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gray-900 dark:bg-orange-500' 
                : 'w-2 bg-gray-300 dark:bg-white/10 hover:bg-gray-400 dark:hover:bg-white/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


export const Resume = () => {
  // Reusable Timeline Item Component
  const TimelineItem = ({ data, isLast }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 pb-12 group"
    >
      {/* Animated Vertical Line - Updated to Orange-500 tint */}
      {!isLast && (
        <div className="absolute top-2 left-[11px] bottom-0 w-[2px] bg-gray-100 dark:bg-orange-500/10 group-hover:bg-orange-500/30 transition-colors duration-500"></div>
      )}

      {/* Interactive Timeline Dot - Updated to Orange-500 */}
      <div className="absolute top-1.5 left-0 w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-gray-200 dark:border-orange-500/20 group-hover:border-orange-500 transition-colors duration-500 flex items-center justify-center z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-orange-500 transition-colors duration-500 scale-0 group-hover:scale-100"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
          {data.title || data.degree}
        </h4>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-orange-500/10 text-gray-600 dark:text-orange-500 whitespace-nowrap self-start sm:self-auto border border-gray-200 dark:border-orange-500/20">
          {data.date}
        </span>
      </div>
      
      <p className="text-orange-600 dark:text-orange-500 font-medium text-sm mb-4">
        {data.company || data.institution || data.issuer}
      </p>
      
      {data.description && (
        <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed">
          {data.description}
        </p>
      )}
    </motion.div>
  );

  return (
    <section id="resume" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      {/* Header & Download Button - Updated to high-contrast Orange */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Professional Background.
          </h2>
          <p className="text-gray-500 dark:text-white/40 max-w-xl text-lg font-light">
            A summary of my technical experience, academic foundation, and professional credentials.
          </p>
        </div>
        
        <a 
          href="/Adison_Cheruiyot_CV.pdf" 
          download
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white dark:text-black bg-gray-900 dark:bg-orange-500 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shrink-0"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black dark:to-white/20"></span>
          <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-300 absolute left-8" />
          <Download className="mr-2 h-4 w-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute left-8" />
          <span className="ml-6 group-hover:ml-6 transition-all duration-300">Export Profile</span>
        </a>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Experience & Education */}
        <div className="space-y-12">
          {/* Experience Section */}
          {resumeData.experience.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-5 h-5 text-gray-400 dark:text-orange-500/50" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Experience</h3>
              </div>
              <div>
                {resumeData.experience.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    data={item} 
                    isLast={index === resumeData.experience.length - 1 && resumeData.education.length === 0} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {resumeData.education.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-gray-400 dark:text-orange-500/50" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Education</h3>
              </div>
              <div>
                {resumeData.education.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    data={item} 
                    isLast={index === resumeData.education.length - 1} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Certifications */}
        <div>
          {resumeData.certifications.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-5 h-5 text-gray-400 dark:text-orange-500/50" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Certifications</h3>
              </div>
              <div className="bg-gray-50/50 dark:bg-black border border-gray-100 dark:border-orange-500/10 rounded-3xl p-8 sm:p-10">
                {resumeData.certifications.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    data={item} 
                    isLast={index === resumeData.certifications.length - 1} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto bg-white dark:bg-black transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Copy & Direct Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Scale your <br className="hidden lg:block" />
            <span className="text-gray-400 dark:text-orange-500">operations.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md">
            Inquiry for system architecture, performance optimization, or dedicated full-stack development. I focus on turning complex business requirements into stable, production-ready software.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a href="mailto:adisoncheruiyot55@gmail.com" className="group flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-2xl hover:border-orange-500 transition-colors duration-300 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Professional Inquiry</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-orange-500 transition-all duration-300 ml-4" />
            </a>

            <a href="https://www.linkedin.com/in/adisondevlabs/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-2xl hover:border-orange-500 transition-colors duration-300 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Professional Network</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-orange-500 transition-all duration-300 ml-4" />
            </a>

            <a href="https://github.com/AdisonDevLabs/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-2xl hover:border-orange-500 transition-colors duration-300 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">GitHub Profile</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-orange-500 transition-all duration-300 ml-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-orange-500/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-10 bg-white dark:bg-black flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-orange-500 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-2">Inquiry Received</h3>
                  <p className="text-gray-500 dark:text-white/40">I will review your project requirements and respond shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" id="name" name="name" required 
                        value={formData.name} onChange={handleChange} 
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-orange-500/5 border border-gray-200 dark:border-orange-500/10 rounded-2xl focus:outline-none focus:border-orange-500 transition-all duration-300 text-gray-900 dark:text-white"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" id="email" name="email" required 
                        value={formData.email} onChange={handleChange} 
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-orange-500/5 border border-gray-200 dark:border-orange-500/10 rounded-2xl focus:outline-none focus:border-orange-500 transition-all duration-300 text-gray-900 dark:text-white"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-500 dark:text-white/40 uppercase tracking-wider">Project Brief</label>
                    <textarea 
                      id="message" name="message" rows="5" required 
                      value={formData.message} onChange={handleChange} 
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-orange-500/5 border border-gray-200 dark:border-orange-500/10 rounded-2xl focus:outline-none focus:border-orange-500 transition-all duration-300 text-gray-900 dark:text-white resize-none"
                      placeholder="Briefly describe the operational challenges or system requirements..."
                    ></textarea>
                  </div>

                  <div className="space-y-3">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'} 
                      className="w-full sm:w-auto px-10 py-4 bg-gray-900 dark:bg-orange-500 text-white dark:text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                    <p className="text-xs text-gray-500 dark:text-white/30 ml-2">
                      Typically responds within 24 hours.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};