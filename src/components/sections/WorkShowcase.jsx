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
      desc: "Designed candidate sourcing models leveraging LinkedIn, Internshala, Indeed, and Apna to source entry-to-mid level roles while maintaining quick turnaround times.",
      tags: ["Talent Sourcing", "Recruitment", "Candidate Screening"],
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
    <section className="relative py-16 sm:py-20 bg-white" id="work">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="HR PROJECTS & EXPERIENCE"
            title="Strategic HR Initiatives & Deliverables"
            subtitle="Demonstrating structured thinking, process standardization, candidate experience, and operational rigor."
          />

          <Link to="/work" className="btn-ghost" data-cursor="hover">
            Explore All Case Studies
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hrProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlowCard className="group overflow-hidden p-0 bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3">
                      <Badge className="bg-white text-slate-800 border border-slate-200 shadow-sm">
                        FEATURED
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {p.company}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <span>DELIVERABLE SCOPE</span>
                    <span>VIEW DETAILS →</span>
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
