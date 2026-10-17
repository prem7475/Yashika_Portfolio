import About from "../components/sections/About";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import Expertise from "../components/sections/Expertise";
import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import Timeline from "../components/sections/Timeline";
import WorkShowcase from "../components/sections/WorkShowcase";
import PageShell from "../components/ui/PageShell";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <About />
      <Expertise />
      <WorkShowcase />
      <Timeline />
      <EducationSection />
      <Testimonials />
      <ContactSection />
    </PageShell>
  );
}
