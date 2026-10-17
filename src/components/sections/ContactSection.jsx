import { motion } from "framer-motion";
import { profile } from "../../data/siteContent";
import ContactForm from "../ui/ContactForm";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-slate-50/80 border-t border-slate-200" id="contact">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="CONTACT OPTIONS"
            title="Discuss HR Opportunities & Collaborations"
            subtitle="I am actively open for Talent Acquisition, HR Operations, and Strategic HR opportunities. Feel free to connect directly via LinkedIn or email."
          />

          <motion.div
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block group"
              data-cursor="hover"
            >
              <GlowCard className="p-3.5 sm:p-4 bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-all">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#0A66C2]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">
                      LINKEDIN PROFILE
                    </div>
                    <div className="font-display text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Yashika S. on LinkedIn
                    </div>
                    <div className="text-[11px] text-slate-500">
                      linkedin.com/in/yashika-s-958a041b8
                    </div>
                  </div>
                </div>
              </GlowCard>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="block group"
              data-cursor="hover"
            >
              <GlowCard className="p-3.5 sm:p-4 bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-all">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
                      EMAIL ADDRESS
                    </div>
                    <div className="font-display text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {profile.email}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Click to send an email
                    </div>
                  </div>
                </div>
              </GlowCard>
            </a>

            <GlowCard className="p-3.5 sm:p-4 bg-stone-50/80 border border-stone-200 shadow-2xs">
              <div className="text-[10px] font-bold tracking-wider text-slate-600 uppercase">
                LOCATION & INSTITUTION
              </div>
              <div className="mt-0.5 font-display text-sm font-bold text-slate-900">
                Mumbai, Maharashtra, India
              </div>
              <p className="mt-0.5 text-[11px] text-slate-500">
                VESIM — Vivekanand Institute of Management Studies and Research
              </p>
            </GlowCard>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
