import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './SharedUI';

export const Header = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'services', title: 'Services' },
    { id: 'projects', title: 'Projects' },
    { id: 'resume', title: 'Resume' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white" onClick={() => setActiveSection('home')}>
              Adison Cheruiyot
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-orange-600'
                      : 'text-gray-700 dark:text-white hover:bg-orange-600 dark:hover:bg-orange-600'
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
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-white hover:bg-orange-600 dark:hover:bg-orange-700"
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
                  href={`#${link.id}`}
                  onClick={() => { setActiveSection(link.id); setIsOpen(false); }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-orange-600'
                      : 'text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-orange-700'
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