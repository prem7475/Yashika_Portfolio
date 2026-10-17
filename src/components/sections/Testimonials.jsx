import { motion } from "framer-motion";
import { coreCompetencies } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const cardColors = [
    "bg-blue-50/50 border-blue-100",
    "bg-indigo-50/50 border-indigo-100",
    "bg-emerald-50/50 border-emerald-100",
    "bg-stone-50/80 border-stone-200"
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200" id="competencies">
      <div className="container-x">
        <SectionHeading
          eyebrow="RECRUITMENT & HR TOOLKIT"
          title="Core Capabilities & Sourcing Toolkit"
          subtitle="Familiarity with candidate sourcing platforms, HR operations, applicant screening, and campus leadership."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreCompetencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
            >
              <GlowCard className={`h-full p-4 sm:p-5 rounded-xl border shadow-2xs ${cardColors[idx % cardColors.length]}`}>
                <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mt-0.5">
                  {comp.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
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
