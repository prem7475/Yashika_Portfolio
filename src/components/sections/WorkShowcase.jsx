import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function WorkShowcase() {
  const hrProjects = [
    {
      title: "HR Standard Operating Procedures & HRIS Evaluation",
      company: "Sumeet Infra Solutions Ltd.",
      desc: "Standardized HR operational workflows and evaluated modern HRIS software solutions to streamline onboarding, employee records, and feedback loops.",
      tags: ["HR SOPs", "HRIS Tech", "Operations"],
      img: "/sumeet-entrance.png"
    },
    {
      title: "Multi-Channel Sourcing & Candidate Pipeline Strategy",
      company: "SnapFind & Freelance Recruitment",
      desc: "Designed candidate sourcing models leveraging LinkedIn, Internshala, Indeed, and Apna to source entry-to-mid level roles while maintaining quick TAT.",
      tags: ["Talent Sourcing", "Recruitment", "TAT Reduction"],
      img: "/sumeet-award.png"
    },
    {
      title: "Volunteer Recruitment & Employee Engagement Framework",
      company: "Womenite & VESIM Committees",
      desc: "Spearheaded volunteer hiring drives, orientation sessions, feedback mechanisms, and alumni engagement initiatives to boost team morale and cohesion.",
      tags: ["Engagement", "Onboarding", "Alumni Cell"],
      img: "/sumeet-team.png"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28" id="work">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="HR PROJECTS & CASE STUDIES"
            title="Strategic HR Initiatives & Deliverables"
            subtitle="Demonstrating structured thinking, process standardization, candidate experience, and operational rigor."
          />

          <Link to="/work" className="btn-ghost" data-cursor="hover">
            Explore All Case Studies
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {hrProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="group overflow-hidden p-0 bg-white border-[#B8975B]/25 hover:border-[#8C6D34] shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#FAF8F5]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-white/95 text-[#8C6D34] border-[#B8975B]/30 shadow-md">
                        FEATURED HR CASE STUDY
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold text-[#8C6D34] uppercase tracking-wider">
                      {p.company}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1A1D20] mt-1">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#505765]">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-lg bg-[#FAF7F2] border border-[#B8975B]/20 px-2.5 py-1 text-[11px] font-semibold text-[#8C6D34]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#B8975B]/15 flex items-center justify-between text-xs font-bold text-[#1A1D20] group-hover:text-[#8C6D34] transition-colors">
                    <span>DELIVERABLE SCOPE</span>
                    <span>READ CASE STUDY →</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
