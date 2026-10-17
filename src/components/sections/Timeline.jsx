import { motion } from "framer-motion";
import { useState } from "react";
import { experiences } from "../../data/siteContent";
import InternshipCarousel from "../ui/InternshipCarousel";
import SectionHeading from "../ui/SectionHeading";

export default function Timeline() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Corporate Internships", "Recruitment", "Campus Leadership"];

  const filteredExperiences = experiences.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Corporate Internships")
      return item.type.includes("Internship") || item.type.includes("Corporate") || item.type.includes("PSU");
    if (filter === "Recruitment")
      return item.type.includes("Recruiter") || item.type.includes("Acquisition") || item.role.includes("Recruiter");
    if (filter === "Campus Leadership")
      return item.type.includes("Campus") || item.company.includes("VESIM");
    return true;
  });

  return (
    <section className="relative py-16 sm:py-20 bg-white" id="experience">
      <div className="container-x">
        <SectionHeading
          eyebrow="WORK EXPERIENCE"
          title="Professional Journey & Internship Exposure"
          subtitle="Gaining versatile experience across corporate HR operations, talent acquisition, freelance recruiting, and campus leadership."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-colors uppercase ${
                filter === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <InternshipCarousel />
        </div>

        <div className="relative mt-12 space-y-6">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            CHRONOLOGICAL CAREER & LEADERSHIP TIMELINE
          </div>

          <div className="grid gap-4">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[11px] font-bold text-slate-700 uppercase">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-500">
                        📍 {exp.location}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="shrink-0 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-700">
                    {exp.period}
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
