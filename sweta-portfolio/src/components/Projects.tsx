
'use client';

import { motion } from "framer-motion";


const projects = [
  {
    title: "State Street UI Migration",
    description: "Migrated legacy UI to Material UI and Storybook with full test coverage.",
    tech: "React, Material UI, Jest, Storybook",
    link: "#",
  },
  {
    title: "Barclays Camunda Workflow",
    description: "Integrated Camunda and OpenFin to streamline sales ops across platforms.",
    tech: "Spring Boot, Camunda, OpenFin, Angular",
    link: "#",
  },
  {
    title: "Krishna Bhajan Visualizer",
    description: "Personal project to visualize devotional music using web animations.",
    tech: "HTML5, CSS3, JavaScript, GSAP",
    link: "#",
  },
];

export default function Projects() {
  return (
<section id="projects" className="py-20 px-4 md:px-20 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-pink mb-10 text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow-md border border-brand-turquoise"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-3 text-sm text-gray-600">{project.tech}</p>
              <p className="text-base mb-4">{project.description}</p>
              <a href={project.link} className="text-brand-turquoise font-semibold hover:underline">
                🔗 View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
