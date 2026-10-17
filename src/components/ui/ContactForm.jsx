import { useMemo, useState } from "react";
import { profile } from "../../data/siteContent";
import GlowCard from "./GlowCard";

function Field({ label, as = "input", ...props }) {
  const Comp = as;

  return (
    <div className="relative">
      <Comp
        className={
          "peer w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 pt-4 pb-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
        }
        placeholder=" "
        {...props}
      />
      <label className="pointer-events-none absolute left-3.5 top-1.5 text-[11px] font-semibold tracking-wider text-blue-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-blue-600 uppercase">
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
    <GlowCard className="p-6 sm:p-7 bg-white border border-slate-200 shadow-sm">
      <div className="mb-5">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          DIRECT MESSAGE
        </span>
        <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">
          Get in Touch with Yashika S.
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Open for Talent Acquisition opportunities, HR internships, and collaborative projects.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-3.5">
        <div className="grid gap-3.5 sm:grid-cols-2">
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
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button type="submit" className="btn-primary" data-cursor="hover">
            <span>Send Email Message</span>
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

        <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
          Email: <span className="font-semibold text-slate-800">{profile.email}</span>
        </div>
      </form>
    </GlowCard>
  );
}
