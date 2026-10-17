import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile, topSkills } from "../../data/siteContent";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 bg-slate-50/80 border-b border-slate-200"
      id="top"
    >
      <div className="container-x relative z-10 w-full">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                MBA HR • VESIM '27
              </Badge>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open for TA & HR Roles
              </span>
            </div>

            <h1 className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Yashika S.
            </h1>

            <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-blue-600 tracking-wide">
              {profile.tagline}
            </p>

            <p className="mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              {profile.subheadline}
            </p>

            {/* Skill Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {topSkills.slice(0, 5).map((skill, idx) => (
                <span
                  key={skill}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold border shadow-2xs ${
                    idx % 2 === 0
                      ? "bg-white text-slate-700 border-slate-200"
                      : "bg-blue-50/70 text-blue-800 border-blue-100"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                data-cursor="hover"
              >
                <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="btn-ghost"
                data-cursor="hover"
              >
                <span>Email Yashika</span>
              </a>

              <Link to="/resume" className="btn-ghost" data-cursor="hover">
                <span>View Resume</span>
              </Link>
            </div>

            {/* Key Stat Cards */}
            <div className="mt-7 grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 border-t border-slate-200">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="font-display text-base sm:text-xl font-bold text-slate-900">Sumeet Infra</div>
                <div className="text-[10px] sm:text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">HR Intern</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="font-display text-base sm:text-xl font-bold text-slate-900">VESIM '27</div>
                <div className="text-[10px] sm:text-xs font-semibold text-indigo-600 uppercase tracking-wider mt-0.5">3 Committees</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="font-display text-base sm:text-xl font-bold text-slate-900">SnapFind</div>
                <div className="text-[10px] sm:text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">Recruiter</div>
              </div>
            </div>
          </motion.div>

          {/* Portrait Photo */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 sm:p-2.5 shadow-sm">
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={profile.heroImage}
                    alt="Yashika S. — MBA HR Professional"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="p-2.5 sm:p-3 bg-stone-50/80 rounded-lg text-center border border-stone-200/80 mt-2">
                  <span className="font-display text-base font-bold text-slate-900">
                    Yashika S.
                  </span>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-600 uppercase tracking-wider mt-0.5">
                    Talent Acquisition • HR Operations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
