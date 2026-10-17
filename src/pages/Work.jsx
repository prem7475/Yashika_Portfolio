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
    <PageShell className="pt-24 pb-20">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end border-b border-slate-200 pb-6">
          <SectionHeading
            eyebrow="HR PORTFOLIO & WORK"
            title="HR Projects, SOPs & Internship Exposure"
            subtitle="Overview of deliverables created during corporate internships, freelance recruitment drives, and campus initiatives."
          />

          <div className="flex flex-wrap gap-2">
            <Link to="/" className="btn-ghost text-xs" data-cursor="hover">
              ← Back to Home
            </Link>
            <Link to="/resume" className="btn-primary text-xs" data-cursor="hover">
              View Resume PDF
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <InternshipCarousel />
        </div>

        <div className="mt-12 space-y-6">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            FEATURED HR DELIVERABLES
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {hrCaseStudies.map((cs) => (
              <GlowCard key={cs.title} className="overflow-hidden p-0 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-48 bg-slate-100">
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2.5 left-2.5 text-xs font-semibold text-white bg-slate-900/80 px-2.5 py-0.5 rounded-md">
                      {cs.period}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                      {cs.company}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {cs.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <div className="text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-1.5">
                      KEY DELIVERABLES
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {cs.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
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

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            CONNECT FOR TA & HR ROLES
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
            Interested in discussing HR qualifications or hiring mandates?
          </h3>
          <p className="mt-1 max-w-2xl text-xs text-slate-600">
            Eager to contribute to forward-thinking HR teams and corporate Talent Acquisition programs.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
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
