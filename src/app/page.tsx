import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import JourneyButton from "@/components/sections/JourneyButton";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About />
      <JourneyButton />
      <Projects />
      <Skills />
      
      {/* Footer */}
      <footer className="py-8 border-t border-outline/10 text-center text-on-surface-variant font-jetbrains text-sm">
        <p>&copy; {new Date().getFullYear()} Ashutosh Pandey. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}
