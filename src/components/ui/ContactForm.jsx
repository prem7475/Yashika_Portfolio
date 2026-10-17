import { useMemo, useState } from "react";
import { profile } from "../../data/siteContent";
import GlowCard from "./GlowCard";

function Field({ label, as = "input", ...props }) {
  const Comp = as;

  return (
    <div className="relative">
      <Comp
        className={
          "peer w-full rounded-2xl border border-[#B8975B]/30 bg-[#FAF8F5] px-4 pt-5 pb-3 text-sm text-[#1A1D20] outline-none transition focus:border-[#8C6D34] focus:ring-2 focus:ring-[#B8975B]/20"
        }
        placeholder=" "
        {...props}
      />
      <label className="pointer-events-none absolute left-4 top-2 text-xs font-semibold tracking-[0.18em] text-[#8C6D34] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-[#656C7A] peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[#8C6D34] uppercase">
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const sub = encodeURIComponent(subject || "Portfolio Contact — Yashika S.");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    return `mailto:${profile.email}?subject=${sub}&body=${body}`;
  }, [email, message, name, subject]);

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailto;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <GlowCard className="p-7 sm:p-9 bg-white border-[#B8975B]/25 shadow-lg">
      <div className="mb-6">
        <span className="text-xs font-bold tracking-[0.2em] text-[#8C6D34] uppercase">
          SEND A DIRECT MESSAGE
        </span>
        <h3 className="font-display text-2xl font-bold text-[#1A1D20] mt-1">
          Get in Touch with Yashika S.
        </h3>
        <p className="text-xs text-[#656C7A] mt-1">
          Available for HR internships, Talent Acquisition roles, and collaborative projects.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Field
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Field
          label="Subject / Role Inquiry"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <Field
          label="Your Message"
          as="textarea"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button type="submit" className="btn-primary" data-cursor="hover">
            <span>Send Email Message</span>
            <svg className="h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            type="button"
            onClick={copyEmail}
            className="btn-ghost text-xs"
            data-cursor="hover"
          >
            {copied ? "✓ Email Copied!" : "📋 Copy Email Address"}
          </button>
        </div>

        <div className="text-xs text-[#786E63] pt-2 border-t border-[#B8975B]/15">
          Email: <span className="font-semibold text-[#1A1D20]">{profile.email}</span>
        </div>
      </form>
    </GlowCard>
  );
}
