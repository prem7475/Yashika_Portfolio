import { Link } from "react-router-dom";
import GlowCard from "../components/ui/GlowCard";
import InternshipCarousel from "../components/ui/InternshipCarousel";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Work() {
  const hrCaseStudies = [
    {
      title: "HR SOPs & HRIS Research Project",
      company: "Sumeet Infra Solutions Ltd.",
      period: "May 2026 — Aug 2026",
      desc: "Development of Standard Operating Procedures (SOPs) across candidate onboarding, internal documentation, employee feedback surveys, and evaluation of modern HRIS platforms.",
      highlights: [
        "SOP Mapping for Operations & Onboarding",
        "HRIS Tech Evaluation & Feature Benchmarking",
        "Employee Satisfaction & Sentiment Surveys",
        "Recruitment Coordination & TAT Tracking"
      ],
      img: "/sumeet-entrance.png"
    },
    {
      title: "Talent Acquisition & Sourcing Strategy",
      company: "SnapFind & Independent Recruiting",
      period: "Sep 2025 — Present",
      desc: "Building structured talent pipelines for diverse client mandates. Sourcing across LinkedIn, Internshala, Indeed, and Apna while maintaining candidate engagement and screening quality.",
      highlights: [
        "Multi-platform Sourcing (LinkedIn, Indeed, Apna)",
        "Candidate Screening & Fit Assessment",
        "Candidate Experience & Pipeline Management",
        "End-to-end Interview Scheduling"
      ],
      img: "/sumeet-award.png"
    },
    {
      title: "Volunteer Hiring & Engagement Framework",
      company: "Womenite & VESIM Committees",
      period: "Aug 2025 — Present",
      desc: "Spearheading intern & volunteer hiring drives, designing orientation frameworks, and managing cross-functional team coordination across student committees and non-profit projects.",
      highlights: [
        "Volunteer & Intern Sourcing Drives",
        "Orientation & Training Session Execution",
        "Alumni Networking & Committee Events",
        "Cross-functional Team Engagement"
      ],
      img: "/sumeet-team.png"
    }
  ];

  return (
    <PageShell className="pt-28 pb-24">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end border-b border-[#B8975B]/20 pb-8">
          <SectionHeading
            eyebrow="HR PORTFOLIO & WORK"
            title="HR Projects, SOPs & Internship Exposure"
            subtitle="Detailed overview of real-world deliverables created during corporate internships, freelance recruitment drives, and campus initiatives."
          />

          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn-ghost text-xs" data-cursor="hover">
              ← Back to Home
            </Link>
            <Link to="/resume" className="btn-primary text-xs" data-cursor="hover">
              View Resume PDF
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <InternshipCarousel />
        </div>

        <div className="mt-16 space-y-8">
          <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase">
            FEATURED HR DELIVERABLES
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {hrCaseStudies.map((cs) => (
              <GlowCard key={cs.title} className="overflow-hidden p-0 bg-white border-[#B8975B]/25 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 bg-[#FAF8F5]">
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                      {cs.period}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase">
                      {cs.company}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1A1D20] mt-1">
                      {cs.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#505765]">
                      {cs.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="rounded-2xl border border-[#B8975B]/20 bg-[#FAF7F2] p-4">
                    <div className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase mb-2">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#3E4450]">
                      {cs.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#8C6D34]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-[#B8975B]/30 bg-gradient-to-r from-white via-[#FAF7F2] to-white p-8 shadow-lg">
          <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase">
            CONNECT FOR TA & HR ROLES
          </div>
          <h3 className="mt-2 font-display text-3xl font-bold text-[#1A1D20]">
            Interested in discussing HR qualifications or hiring mandates?
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[#505765]">
            Eager to contribute to forward-thinking HR teams and corporate Talent Acquisition programs.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary text-xs" data-cursor="hover">
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/yashika-s-958a041b8"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs"
              data-cursor="hover"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
