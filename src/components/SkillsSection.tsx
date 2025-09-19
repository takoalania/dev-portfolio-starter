'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { siteConfig } from '@/config';
import type { SkillGroup } from '@/config';
const iconMap = {
  react: <FaReact className="text-blue-400" />,
  node: <FaNodeJs className="text-green-400" />,
  tools: <FaTools className="text-pink-400" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 bg-[#0d1117] text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        🧠 My Expertise
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.skills.map((group, index) => (
          <motion.div
            key={index}
            className="bg-[#161b22] p-6 rounded-lg shadow-lg will-change-transform cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {iconMap[group.icon]} {group.category}
            </h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
