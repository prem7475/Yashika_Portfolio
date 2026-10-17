import { motion } from "framer-motion";
import { expertise } from "../../data/siteContent";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

function HRIcon({ index }) {
  const common = "h-5 w-5";

  if (index === 0) {
    return (
      <svg className={`${common} text-blue-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className={`${common} text-indigo-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg className={`${common} text-emerald-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  return (
    <svg className={`${common} text-slate-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

export default function Expertise() {
  const bgClasses = [
    "bg-blue-50/50 border-blue-100",
    "bg-indigo-50/50 border-indigo-100",
    "bg-emerald-50/50 border-emerald-100",
    "bg-slate-50 border-slate-200"
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-50/80 border-y border-slate-200" id="expertise">
      <div className="container-x">
        <SectionHeading
          eyebrow="DOMAIN EXPERTISE"
          title="Strategic HR & Operational Capabilities"
          subtitle="Designed around the complete employee journey — from candidate sourcing and structured interviewing to HR SOPs, employee feedback, and campus leadership."
        />

        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlowCard className={`p-5 sm:p-6 rounded-2xl shadow-2xs border ${bgClasses[i % bgClasses.length]}`}>
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <HRIcon index={i} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>

                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
