import { motion } from "framer-motion";
import { about, profile, stats } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="relative py-16 sm:py-20 bg-white" id="about">
      <div className="container-x grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <GlowCard className="relative overflow-hidden p-5 sm:p-6 bg-white shadow-sm border border-slate-200">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-slate-200 aspect-[4/5] bg-slate-50">
                <img
                  src={profile.campusImage}
                  alt="Yashika S. at VESIM Campus"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  HR PHILOSOPHY
                </div>
                <div className="mt-1.5 text-sm leading-relaxed text-slate-700 font-medium">
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

          <div className="mt-6 space-y-3.5 text-base leading-relaxed text-slate-600">
            {about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <GlowCard key={s.label} className="p-4 bg-white border border-slate-200 shadow-sm">
                <div className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                  {s.label}
                </div>
                <div className="mt-1 font-display text-lg font-bold text-slate-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-slate-500">{s.hint}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
