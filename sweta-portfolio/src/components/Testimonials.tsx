'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Tracy Carter",
    role: "Director, MGEN Dept.",
    quote:
      "Sweta is a natural leader and a compassionate mentor. Her presence uplifts those around her.",
  },
  {
    name: "Jason Perera",
    role: "Communication Coach, CommLab",
    quote:
      "I've seen Sweta turn silence into stories. She's a rare blend of intellect and empathy.",
  },
  {
    name: "Elton Perera",
    role: "Sr. Engineer, State Street",
    quote:
      "Sweta picks up complex concepts quickly and translates them into scalable solutions. A true asset!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 md:px-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brand-pink mb-10">Testimonials</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="p-8 bg-brand-softwhite dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg italic mb-4">“{testimonials[index].quote}”</p>
              <p className="font-semibold">{testimonials[index].name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="text-brand-turquoise text-2xl">←</button>
            <button onClick={next} className="text-brand-turquoise text-2xl">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
