import { motion } from "framer-motion";
import { coreCompetencies } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 bg-white border-t border-slate-200" id="competencies">
      <div className="container-x">
        <SectionHeading
          eyebrow="RECRUITMENT & HR TOOLKIT"
          title="Core Capabilities & Sourcing Toolkit"
          subtitle="Familiarity with candidate sourcing platforms, HR operations, applicant screening, and campus leadership."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlowCard className="h-full p-5 bg-white border border-slate-200 shadow-sm hover:border-slate-300">
                <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                  {comp.title}
                </h3>

                <ul className="mt-3.5 space-y-2">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
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
