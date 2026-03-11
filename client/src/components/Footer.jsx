import React from 'react';

export const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Adison Cheruiyot. All Rights Reserved.</p>
        </div>
    </footer>
);