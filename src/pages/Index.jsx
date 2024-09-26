import React from 'react';
import { ThemeProvider } from 'next-themes';
import FeedbackForm from '../components/FeedbackForm';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Client Feedback Form</h1>
            <ThemeToggle />
          </div>
          <FeedbackForm />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
