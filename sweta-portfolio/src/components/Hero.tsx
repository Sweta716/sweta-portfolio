export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-20 text-center bg-white">
      <h1 className="text-5xl font-bold text-brand-pink mb-4">
        Sweta Mishra
      </h1>
      <p className="text-xl text-brand-turquoise mb-6">
        Full Stack Developer | Creative Technologist | Mentor
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/Sweta_Resume.pdf"
          className="bg-brand-yellow text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          download
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="border border-brand-turquoise text-brand-turquoise px-6 py-3 rounded-full font-semibold hover:bg-brand-turquoise hover:text-white transition"
        >
          📬 Contact Me
        </a>
      </div>
    </section>
  );
}
