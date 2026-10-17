import { motion } from "framer-motion";
import { education } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function EducationSection() {
  const committees = [
    {
      title: "Alumni Cell Member",
      institution: "VESIM Mumbai",
      period: "Oct 2025 — Present",
      desc: "Coordinating alumni engagement drives, managing graduate networking programs, and organizing corporate connect sessions.",
      color: "bg-blue-50/60 border-blue-100"
    },
    {
      title: "Student Welfare Committee Member",
      institution: "VESIM Mumbai",
      period: "Oct 2025 — Present",
      desc: "Representing student interest, organizing campus welfare initiatives, and collaborating across student affairs.",
      color: "bg-emerald-50/60 border-emerald-100"
    },
    {
      title: "HR Cell Member",
      institution: "VESIM Mumbai",
      period: "Oct 2025 — Present",
      desc: "Facilitating HR domain workshops, peer learning sessions, and guest lectures with industry recruiters.",
      color: "bg-indigo-50/60 border-indigo-100"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-50/80 border-t border-slate-200" id="education">
      <div className="container-x">
        <SectionHeading
          eyebrow="EDUCATION & CAMPUS LEADERSHIP"
          title="Academic Qualifications & Governance"
          subtitle="Building management fundamentals and practical people skills through higher education and active campus committees."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-3.5">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              ACADEMIC DEGREES
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <GlowCard className="p-4 sm:p-5 bg-white border border-slate-200 shadow-2xs hover:border-slate-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                        {edu.timeline}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-700">
                    🏛️ {edu.institution}
                  </div>

                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {edu.details}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              CAMPUS COMMITTEES
            </div>

            <div className="space-y-3">
              {committees.map((com, idx) => (
                <motion.div
                  key={com.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`rounded-xl border p-4 shadow-2xs ${com.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase">
                      {com.institution}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-600 bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                      {com.period}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-slate-900 mt-1">
                    {com.title}
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {com.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
