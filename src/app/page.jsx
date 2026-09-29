import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Dock />
    </>
  );
}
