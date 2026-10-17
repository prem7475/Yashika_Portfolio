import { Link } from "react-router-dom";
import { profile } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-xl font-bold tracking-tight text-slate-900">
            Yashika S.
          </div>
          <div className="mt-0.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            MBA HR • VESIM '27 • TALENT ACQUISITION & HR OPERATIONS
          </div>
          <div className="mt-1 text-xs text-slate-500">
            📍 Mumbai, Maharashtra, India
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
            data-cursor="hover"
          >
            <svg className="h-4 w-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-blue-600 transition-colors"
            data-cursor="hover"
          >
            Email Me
          </a>
          <Link to="/resume" className="hover:text-blue-600 transition-colors" data-cursor="hover">
            Resume
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors" data-cursor="hover">
            Contact
          </Link>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Yashika S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
