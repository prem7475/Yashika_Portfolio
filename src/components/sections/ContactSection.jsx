import { motion } from "framer-motion";
import { profile } from "../../data/siteContent";
import ContactForm from "../ui/ContactForm";
import GlowCard from "../ui/GlowCard";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28" id="contact">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="CONNECT & CONTACT OPTIONS"
            title="Let’s Discuss HR Opportunities & Collaborations"
            subtitle="I am actively open for Talent Acquisition, HR Operations, and Strategic HR roles. Feel free to connect directly via LinkedIn or email."
          />

          <motion.div
            className="mt-8 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block group"
              data-cursor="hover"
            >
              <GlowCard className="p-5 bg-white border-[#B8975B]/25 group-hover:border-[#0A66C2] shadow-sm transition-all">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2]">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase">
                      LINKEDIN PROFILE
                    </div>
                    <div className="font-display text-lg font-bold text-[#1A1D20] group-hover:text-[#0A66C2] transition-colors">
                      Yashika S. on LinkedIn
                    </div>
                    <div className="text-xs text-[#656C7A]">
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
              <GlowCard className="p-5 bg-white border-[#B8975B]/25 group-hover:border-[#8C6D34] shadow-sm transition-all">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#B8975B]/15 text-[#8C6D34]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase">
                      EMAIL ADDRESS
                    </div>
                    <div className="font-display text-lg font-bold text-[#1A1D20] group-hover:text-[#8C6D34] transition-colors">
                      {profile.email}
                    </div>
                    <div className="text-xs text-[#656C7A]">
                      Click to send an email directly
                    </div>
                  </div>
                </div>
              </GlowCard>
            </a>

            <GlowCard className="p-5 bg-[#FAF7F2] border-[#B8975B]/20 shadow-sm">
              <div className="text-xs font-bold tracking-wider text-[#8C6D34] uppercase">
                LOCATION & INSTITUTION
              </div>
              <div className="mt-1 font-display text-base font-bold text-[#1A1D20]">
                Mumbai, Maharashtra, India
              </div>
              <p className="mt-1 text-xs text-[#656C7A]">
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
