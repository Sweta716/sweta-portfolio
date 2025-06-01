'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-brand-pink mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-lg mb-8">
          Whether it’s mentorship, collaboration, or just a warm hello — I’d love to hear from you.
        </p>
        <motion.form
          action="https://formspree.io/f/xjkrbljp"
          method="POST"
          className="space-y-6 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
          <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
          <textarea name="message" required placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md" />
          <button type="submit" className="bg-brand-yellow text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
            📬 Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
