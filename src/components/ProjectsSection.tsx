'use client';

import { usePrefersReducedMotion } from '../helpers/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from "@/config";

const personalProjects = siteConfig.projects.filter(p => p.category === 'personal');
const contributionProjects = siteConfig.projects.filter(p => p.category === 'contributions');

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function ProjectsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const renderProjectCard = (project: any, index: number) => {
    const Wrapper = prefersReducedMotion ? 'div' : motion.div;

    return (
      <Wrapper
        key={index}
        {...(!prefersReducedMotion && {
          initial: 'hidden',
          whileInView: 'show',
          viewport: { once: true, amount: 0.4 },
          variants: fadeIn
        })}
        className="grid md:grid-cols-2 gap-8 items-center mb-16"
      >
        <div className="w-full h-60 bg-gray-800 rounded-lg overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-sm"
              >
                Visit Site
              </a>
            )}
            {project.codeUrl && (
              <Link
                href={project.codeUrl}
                target="_blank"
                className="border border-gray-500 hover:bg-gray-800 transition px-4 py-2 rounded text-sm"
              >
                View Code
              </Link>
            )}
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <section id="projects" className="relative z-10 px-6 py-20 bg-[#0c0f13] text-white">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        🛠 My Work
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-20">
        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">💼 Contributions</h3>
          {contributionProjects.map(renderProjectCard)}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-10 border-b border-gray-700 pb-2">🧪 Personal Projects</h3>
          {personalProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
}
