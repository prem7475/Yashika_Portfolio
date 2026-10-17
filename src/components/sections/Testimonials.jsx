import { motion } from "framer-motion";
import { coreCompetencies } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-[#F6F3EE]/40" id="competencies">
      <div className="container-x">
        <SectionHeading
          eyebrow="RECRUITMENT & HR TOOLKIT"
          title="Core Capabilities & Sourcing Toolkit"
          subtitle="Hands-on familiarity with talent sourcing platforms, HR operations, candidate screening, and campus leadership."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="h-full p-6 bg-white border-[#B8975B]/25 shadow-sm">
                <div className="text-xs font-bold tracking-[0.2em] text-[#8C6D34] uppercase">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1D20] mt-1">
                  {comp.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-semibold text-[#3E4450]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8C6D34]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
