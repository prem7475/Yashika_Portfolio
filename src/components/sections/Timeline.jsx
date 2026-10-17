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
    <section className="relative py-16 sm:py-20 md:py-28 bg-[#F6F3EE]/60" id="experience">
      <div className="container-x">
        <SectionHeading
          eyebrow="WORK EXPERIENCE & INTERNSHIPS"
          title="Professional Journey & Internship Exposure"
          subtitle="Gaining versatile experience across corporate HR operations, talent acquisition, freelance recruiting, and campus leadership."
        />

        <div className="mt-8 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 uppercase ${
                filter === cat
                  ? "bg-[#1A1D20] text-white shadow-md"
                  : "bg-white text-[#505765] border border-[#B8975B]/25 hover:border-[#8C6D34]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <InternshipCarousel />
        </div>

        <div className="relative mt-16 space-y-8">
          <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase mb-6">
            CHRONOLOGICAL CAREER & LEADERSHIP TIMELINE
          </div>

          <div className="grid gap-6">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className="rounded-3xl border border-[#B8975B]/25 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#FAF7F2] border border-[#B8975B]/30 px-3 py-1 text-[11px] font-bold text-[#8C6D34] uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <span className="text-xs text-[#786E63]">
                        📍 {exp.location}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-display text-2xl font-bold text-[#1A1D20]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#8C6D34] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="shrink-0 rounded-xl bg-[#FAF8F5] border border-[#B8975B]/20 px-3.5 py-1.5 text-xs font-bold text-[#1A1D20]">
                    {exp.period}
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-[#3E4450]">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6D34]" />
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
