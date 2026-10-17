import { motion } from "framer-motion";
import { about, profile, stats } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white" id="about">
      <div className="container-x grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <GlowCard className="relative overflow-hidden p-4 sm:p-5 bg-white shadow-sm border border-slate-200">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-slate-200 aspect-[4/5] bg-slate-50">
                <img
                  src={profile.campusImage}
                  alt="Yashika S. at VESIM Campus"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/60 p-3.5">
                <div className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
                  HR PHILOSOPHY
                </div>
                <div className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                  "HR is about what happens after people join — building culture, smooth processes, and growth alignment."
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="ABOUT YASHIKA"
            title={about.title}
            subtitle="Combining academic rigor in MBA HR with real-world corporate execution across Talent Acquisition, HR Operations, and Campus Leadership."
          />

          <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-slate-600">
            {about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((s, idx) => (
              <GlowCard
                key={s.label}
                className={`p-3.5 rounded-xl shadow-2xs border ${
                  idx === 0
                    ? "bg-blue-50/40 border-blue-100"
                    : idx === 1
                    ? "bg-emerald-50/40 border-emerald-100"
                    : "bg-indigo-50/40 border-indigo-100"
                }`}
              >
                <div className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">
                  {s.label}
                </div>
                <div className="mt-1 font-display text-base sm:text-lg font-bold text-slate-900">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">{s.hint}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
