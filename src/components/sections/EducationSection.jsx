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
    <section className="relative py-16 sm:py-20 md:py-28" id="education">
      <div className="container-x">
        <SectionHeading
          eyebrow="ACADEMIC BACKGROUND & CAMPUS LEADERSHIP"
          title="Education & Student Leadership"
          subtitle="Building strong management fundamentals and practical people skills through higher education and active campus governance."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase">
              ACADEMIC QUALIFICATIONS
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <GlowCard className="p-6 sm:p-7 bg-white border-[#B8975B]/25 hover:border-[#8C6D34] shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#B8975B]/15 pb-4">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase">
                        {edu.timeline}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#1A1D20] mt-0.5">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 text-sm font-semibold text-[#3E4450]">
                    🏛️ {edu.institution}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[#656C7A]">
                    {edu.details}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase">
              CAMPUS COMMITTEES & INITIATIVES
            </div>

            <div className="space-y-4">
              {committees.map((com, idx) => (
                <motion.div
                  key={com.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="rounded-2xl border border-[#B8975B]/20 bg-[#FAF7F2] p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8C6D34] uppercase">
                      {com.institution}
                    </span>
                    <span className="text-[11px] font-semibold text-[#786E63] bg-white px-2.5 py-0.5 rounded-full border border-[#B8975B]/20">
                      {com.period}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#1A1D20] mt-1">
                    {com.title}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-[#505765]">
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
