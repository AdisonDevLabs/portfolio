import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home, About, Services, Projects, Testimonials, Resume, Contact } from './components/Sections';
import { WhatsAppButton } from './components/WhatsAppButton';

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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} setTheme={setTheme} />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        {/*<Testimonials />*/}
        <Resume />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}