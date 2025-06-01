'use client';
import { motion } from 'framer-motion';

export default function Stories() {
  const cards = [
    {
      title: "Chai & Calm",
      content: "My daily ritual — chai, a deep breath, and Krishna bhajans to return to self.",
      color: "bg-brand-yellow",
    },
    {
      title: "Krishna & Curiosity",
      content: "What if detachment isn’t giving up — but letting go with love?",
      color: "bg-brand-turquoise",
    },
    {
      title: "Paint to Heal",
      content: "Whenever I feel lost, I pick colors. They speak when I can’t.",
      color: "bg-brand-pink",
    },
    {
      title: "Village to Vision",
      content: "From Devnathpur to New York — each milestone carries my roots with pride.",
      color: "bg-white border border-brand-turquoise dark:bg-gray-800",
    },
  ];

  return (
    <motion.section
      id="stories"
      className="py-20 px-4 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-brand-pink mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sweta’s Stories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md ${card.color} transition hover:scale-[1.02]`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-base leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
