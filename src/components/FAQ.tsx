import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={"w-full mx-5 lg:mx-0 border-t border-gray-200 lg:border-t-0"}>
      {items && items.map((item, index) => ( 
        <div
          key={item.id}
          className="mb-4 border-b border-gray-200 pb-4"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h3 className="text-2xl font-semibold cursor-pointer museo-sans">{item.title}</h3>
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">
                  {item.description}
                </p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 text-green-500 hover:text-green-700 font-bold"
                >
                  Learn More
</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;