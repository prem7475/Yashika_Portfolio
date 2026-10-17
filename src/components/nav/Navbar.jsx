import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../../data/siteContent";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Expertise", to: "/#expertise" },
  { label: "Experience", to: "/#experience" },
  { label: "Education", to: "/#education" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5" data-cursor="hover">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                YS
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                  Yashika S.
                </span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  MBA HR • VESIM '27
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "text-xs font-semibold uppercase tracking-wider transition-colors",
                      isActive && location.pathname !== "/"
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-slate-900",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost py-1.5 px-3 text-xs"
                data-cursor="hover"
              >
                <svg className="h-4 w-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <Link to="/resume" className="btn-primary py-1.5 px-3.5 text-xs" data-cursor="hover">
                Resume
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-[#0A66C2]"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900"
                data-cursor="hover"
              >
                <div className="relative h-4 w-4">
                  <motion.span
                    className="absolute left-0 top-0 h-0.5 w-4 bg-slate-900"
                    animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 top-[6px] h-0.5 w-4 bg-slate-900"
                    animate={{ opacity: open ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 top-[12px] h-0.5 w-4 bg-slate-900"
                    animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] bg-white pt-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-5 text-center">
              <div>
                <span className="font-display text-2xl font-bold text-slate-900">Yashika S.</span>
                <p className="text-xs font-semibold text-slate-500 uppercase mt-0.5">
                  MBA HR @ VESIM '27
                </p>
              </div>

              <div className="w-10 h-0.5 bg-slate-200" />

              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-display text-xl font-bold text-slate-800 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col items-center gap-2.5 w-full max-w-xs">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost w-full justify-center text-xs"
                >
                  LinkedIn Profile
                </a>
                <Link to="/resume" className="btn-primary w-full justify-center text-xs">
                  View Resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
