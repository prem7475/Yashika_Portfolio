import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile, topSkills } from "../../data/siteContent";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden"
      id="top"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-[-5%] h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(184,151,91,0.14),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(225,215,198,0.35),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge>MBA HR • VESIM '27</Badge>
              <span className="text-xs font-semibold tracking-[0.18em] text-[#8C6D34] uppercase">
                📍 {profile.location}
              </span>
            </div>

            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-[#1A1D20]">
              Yashika <span className="text-gradient-gold">S.</span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-[#8C6D34] font-display tracking-wide">
              {profile.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#505765]">
              {profile.subheadline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {topSkills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-[#B8975B]/25 bg-white/80 px-3 py-1 text-xs font-semibold text-[#3E4450] shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
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
                <span>LinkedIn Profile</span>
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

            <div className="mt-10 grid gap-4 grid-cols-3 pt-6 border-t border-[#B8975B]/20">
              <div>
                <div className="font-display text-2xl font-bold text-[#1A1D20]">Sumeet Infra</div>
                <div className="text-xs font-semibold text-[#8C6D34] uppercase tracking-wider mt-0.5">HR Intern</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#1A1D20]">VESIM '27</div>
                <div className="text-xs font-semibold text-[#8C6D34] uppercase tracking-wider mt-0.5">3 Committee Roles</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#1A1D20]">SnapFind</div>
                <div className="text-xs font-semibold text-[#8C6D34] uppercase tracking-wider mt-0.5">Freelance Recruiter</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#D4B87C]/30 via-[#B8975B]/20 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#B8975B]/30 bg-white p-3 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#FAF8F5]">
                  <img
                    src={profile.heroImage}
                    alt="Yashika S. — MBA HR Professional"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-4 bg-white text-center border-t border-[#B8975B]/15">
                  <span className="font-display text-xl font-bold text-[#1A1D20]">
                    Yashika S.
                  </span>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#8C6D34] uppercase mt-0.5">
                    Talent Acquisition • HR Operations • Candidate Experience
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
