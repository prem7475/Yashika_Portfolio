import { motion } from "framer-motion";
import { about, profile, stats } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-white/40" id="about">
      <div className="container-x grid gap-8 sm:gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowCard className="relative overflow-hidden p-6 sm:p-8 bg-white shadow-xl border-[#B8975B]/25">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border-2 border-[#B8975B]/20 aspect-[4/5] bg-[#FAF8F5]">
                <img
                  src={profile.campusImage}
                  alt="Yashika S. at VESIM Campus"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-[#B8975B]/20 bg-[#FAF7F2] p-5">
                <div className="text-xs font-bold tracking-[0.2em] text-[#8C6D34] uppercase">
                  HR PHILOSOPHY
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[#3E4450]">
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

          <div className="mt-8 space-y-4 text-base leading-relaxed text-[#505765]">
            {about.body.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <GlowCard key={s.label} className="p-5 bg-white border-[#B8975B]/20 shadow-sm">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#8C6D34] uppercase">
                  {s.label}
                </div>
                <div className="mt-2 font-display text-xl font-bold text-[#1A1D20]">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs text-[#656C7A]">{s.hint}</div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
