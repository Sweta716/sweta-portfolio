// TODO: Replace your-vercel-link.vercel.app with your real domain before launch
// TODO: Add custom preview image at /public/og-image.png
// TODO: Add favicon at /public/favicon.ico (auto-detected by Next.js)
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import Achievements from "../components/Achievements";
import Stories from "../components/Stories";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="bg-brand-softwhite">
      <Hero />
      <AboutMe />
      <Resume />
      <Achievements />
      <Projects/>
      <Testimonials />
      <Stories />
      <Contact />
    </main>
  );
}