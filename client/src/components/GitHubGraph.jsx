import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export const GitHubGraph = () => {
  // 1. Generate 365 days of mock data for the UI
  // (We bias it toward 0 to make it look like a realistic graph)
  const contributionData = useMemo(() => {
    return Array.from({ length: 365 }).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - 364 + i);
      
      // Randomize levels 0-4
      const isActive = Math.random() > 0.4; 
      const level = isActive ? Math.floor(Math.random() * 4) + 1 : 0;
      const count = level === 0 ? 0 : Math.floor(Math.random() * 10) + (level * 2);

      return {
        date: date.toISOString().split('T')[0],
        count,
        level,
      };
    });
  }, []);

  // 2. Map the 5 GitHub levels to our premium minimalist theme colors
  // We use a sleek monochrome/blue scale that respects dark mode
  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-blue-200 dark:bg-blue-900/60';
      case 2: return 'bg-blue-400 dark:bg-blue-700/80';
      case 3: return 'bg-blue-600 dark:bg-blue-500';
      case 4: return 'bg-blue-800 dark:bg-blue-400';
      default: return 'bg-gray-100 dark:bg-gray-800/50'; // Level 0 (Empty)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 overflow-hidden relative group"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Github className="w-6 h-6 text-gray-900 dark:text-white" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
            Contributions
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Last 365 Days
        </p>
      </div>

      {/* The Scrollable Graph Container */}
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[800px] flex gap-1">
          {/* We use CSS Grid to force the 1D array into 7 rows (days of the week) */}
          <div className="grid grid-rows-7 grid-flow-col gap-1.5">
            {contributionData.map((day, index) => (
              <div
                key={index}
                title={`${day.count} contributions on ${day.date}`}
                className={`w-3.5 h-3.5 rounded-[3px] transition-colors duration-300 ${getLevelColor(day.level)} hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-200 hover:ring-offset-1 dark:hover:ring-offset-gray-900 cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* The Legend */}
      <div className="mt-4 flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
        <span>Less</span>
        <div className={`w-3 h-3 rounded-[2px] ${getLevelColor(0)}`}></div>
        <div className={`w-3 h-3 rounded-[2px] ${getLevelColor(1)}`}></div>
        <div className={`w-3 h-3 rounded-[2px] ${getLevelColor(2)}`}></div>
        <div className={`w-3 h-3 rounded-[2px] ${getLevelColor(3)}`}></div>
        <div className={`w-3 h-3 rounded-[2px] ${getLevelColor(4)}`}></div>
        <span>More</span>
      </div>
    </motion.div>
  );
};