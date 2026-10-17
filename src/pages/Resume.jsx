import { profile } from "../data/siteContent";
import PageShell from "../components/ui/PageShell";
import SectionHeading from "../components/ui/SectionHeading";

export default function Resume() {
  return (
    <PageShell className="pt-28 pb-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="RESUME & PROFILE DOCUMENT"
          title="Yashika S. — Curriculum Vitae"
          subtitle="View the official resume document online, or download a copy for offline review."
        />

        <div className="mt-8 overflow-hidden rounded-3xl border border-[#B8975B]/25 bg-white shadow-xl">
          <iframe
            title="Yashika S. Resume PDF"
            src={profile.pdfResume}
            className="h-[80vh] w-full"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl border border-[#B8975B]/20 bg-white shadow-sm">
          <div>
            <h4 className="font-display text-xl font-bold text-[#1A1D20]">
              Yashika S. — MBA HR Profile
            </h4>
            <p className="text-xs text-[#656C7A]">
              VESIM Mumbai (2025-2027) • Sumeet Infra Solutions HR Intern • Freelance Recruiter
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
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
