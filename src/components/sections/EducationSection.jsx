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
      desc: "Coordinating alumni engagement drives, managing graduate networking programs, and organizing corporate connect sessions."
    },
    {
      title: "Student Welfare Committee Member",
      institution: "VESIM Mumbai",
      period: "Oct 2025 — Present",
      desc: "Representing student interest, organizing campus welfare initiatives, and collaborating across student affairs."
    },
    {
      title: "HR Cell Member",
      institution: "VESIM Mumbai",
      period: "Oct 2025 — Present",
      desc: "Facilitating HR domain workshops, peer learning sessions, and guest lectures with industry recruiters."
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="education">
      <div className="container-x">
        <SectionHeading
          eyebrow="EDUCATION & CAMPUS LEADERSHIP"
          title="Academic Qualifications & Governance"
          subtitle="Building management fundamentals and practical people skills through higher education and active campus committees."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              ACADEMIC DEGREES
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlowCard className="p-5 bg-white border border-slate-200 shadow-sm hover:border-slate-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                        {edu.timeline}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2.5 text-sm font-semibold text-slate-700">
                    🏛️ {edu.institution}
                  </div>

                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {edu.details}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              CAMPUS COMMITTEES
            </div>

            <div className="space-y-3">
              {committees.map((com, idx) => (
                <motion.div
                  key={com.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {com.institution}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                      {com.period}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 mt-1">
                    {com.title}
                  </h4>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
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
