import { motion } from "framer-motion";
import { expertise } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

function HRIcon({ index }) {
  const common = "h-6 w-6 text-[#8C6D34]";

  if (index === 0) {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  return (
    <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

export default function Expertise() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28" id="expertise">
      <div className="container-x">
        <SectionHeading
          eyebrow="CORE COMPETENCY & DOMAIN EXPERTISE"
          title="Strategic HR & Operational Capabilities"
          subtitle="Designed around the complete employee journey — from candidate sourcing and structured interviewing to HR SOPs, employee feedback, and campus leadership."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlowCard className="group p-7 sm:p-8 bg-white border-[#B8975B]/25 hover:border-[#8C6D34] shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#B8975B]/30 bg-[#FAF7F2] shadow-sm">
                    <HRIcon index={i} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1A1D20]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#505765]">
                      {item.desc}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm text-[#3E4450]">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C6D34]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B8975B]/15 flex items-center justify-between text-xs font-semibold tracking-[0.18em] text-[#8C6D34] uppercase">
                  <span>HR Deliverable Focus</span>
                  <span>0{i + 1}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
