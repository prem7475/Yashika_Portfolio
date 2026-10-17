import { profile } from "../data/siteContent";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Resume() {
  return (
    <PageShell className="pt-24 pb-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESUME DOCUMENT"
          title="Yashika S. — Curriculum Vitae"
          subtitle="View the official resume document online, or download a copy for offline review."
        />

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Yashika S. Resume PDF"
            src={profile.pdfResume}
            className="h-[80vh] w-full"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900">
              Yashika S. — MBA HR Profile
            </h4>
            <p className="text-xs text-slate-500">
              VESIM Mumbai (2025-2027) • Sumeet Infra Solutions HR Intern • Freelance Recruiter
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={profile.pdfResume}
              className="btn-primary text-xs"
              download="Yashika_S_Resume.pdf"
              data-cursor="hover"
            >
              📥 Download Resume PDF
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs"
              data-cursor="hover"
            >
              LinkedIn Profile
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-ghost text-xs"
              data-cursor="hover"
            >
              Email Yashika
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
