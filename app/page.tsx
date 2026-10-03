import { About } from "@/components/capital-furnitures/About";
import { Collections } from "@/components/capital-furnitures/Collections";
import { Contact } from "@/components/capital-furnitures/Contact";
import { Footer } from "@/components/capital-furnitures/Footer";
import { Gallery } from "@/components/capital-furnitures/Gallery";
import { Hero } from "@/components/capital-furnitures/Hero";
import { Navbar } from "@/components/capital-furnitures/Navbar";
import { Process } from "@/components/capital-furnitures/Process";
import { Projects } from "@/components/capital-furnitures/Projects";
import { Promises } from "@/components/capital-furnitures/Promises";
import { WhyCapitalFurnitures } from "@/components/capital-furnitures/WhyCapitalFurnitures";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Projects />
        <WhyCapitalFurnitures />
        <Process />
        <Gallery />
        <Promises />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
