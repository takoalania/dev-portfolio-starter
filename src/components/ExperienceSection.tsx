'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePrefersReducedMotion } from '../helpers/hooks';
import { siteConfig } from "@/config";

const experiences = siteConfig.experience;

type Experience = {
  company: string;
  title: string;
  location: string;
  logo: string;
  website: string;
  period: string;
  description: string[];
  tech: string[];
};

export default function ExperienceSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10 px-6 py-20 bg-gray-900 text-white max-w-5xl mx-auto" id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">📁 Professional Experience</h2>

      {experiences.map((exp, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={i} className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className={`flex justify-between items-center w-full px-6 py-4 text-left cursor-pointer bg-[#1a1f2b] hover:bg-[#222736] transition-colors ${
                isOpen ? 'border-b border-gray-700' : ''
              }`}
            >
              <span className="font-semibold text-lg">{exp.title} @ {exp.company}</span>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                prefersReducedMotion ? (
                  <div className="p-6 bg-[#161b22] space-y-4">
                    <div className="flex items-center gap-4">
                      {exp.logo && (
                        <Image src={exp.logo} alt={exp.company} width={40} height={40} />
                      )}
                      <div>
                        <div className="text-sm text-gray-400">{exp.location}</div>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            className="text-sm text-blue-400 underline"
                          >
                            {exp.company === 'Freelance (Upwork)' ? 'upwork.com' : exp.website.replace('https://', '')}
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech && exp.tech.map((tech, idx) => (
                        <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="will-change-transform"
                  >
                    <div className="p-6 bg-[#161b22] space-y-4 overflow-hidden">
                      <div className="flex items-center gap-4">
                        {exp.logo && (
                          <Image src={exp.logo} alt={exp.company} width={40} height={40} />
                        )}
                        <div>
                          <div className="text-sm text-gray-400">{exp.location}</div>
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              className="text-sm text-blue-400 underline"
                            >
                              {exp.company === 'Freelance (Upwork)' ? 'upwork.com' : exp.website.replace('https://', '')}
                            </a>
                          )}
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tech && exp.tech.map((tech, idx) => (
                          <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}