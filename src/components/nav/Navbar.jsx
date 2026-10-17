import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../../data/siteContent";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Expertise", to: "/#expertise" },
  { label: "Experience & Photos", to: "/#experience" },
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
      <header className="fixed inset-x-0 top-0 z-[60]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-2 sm:mt-4 flex items-center justify-between rounded-2xl border border-[#B8975B]/25 bg-white/90 px-4 py-2.5 sm:py-3 shadow-lg backdrop-blur-xl">
            <Link to="/" className="flex items-center gap-2.5" data-cursor="hover">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1A1D20] text-xs font-bold text-white shadow-sm">
                YS
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1A1D20]">
                  Yashika S.
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8C6D34] uppercase">
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
                      "text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
                      isActive && location.pathname !== "/"
                        ? "text-[#8C6D34]"
                        : "text-[#505765] hover:text-[#1A1D20]",
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
                className="btn-ghost py-2 px-3.5 text-xs"
                data-cursor="hover"
                title="LinkedIn Profile"
              >
                <svg className="h-4 w-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <Link to="/resume" className="btn-primary py-2 px-4 text-xs" data-cursor="hover">
                Resume
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2]"
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
                className="grid h-9 w-9 place-items-center rounded-xl border border-[#B8975B]/30 bg-white text-[#1A1D20]"
                data-cursor="hover"
              >
                <div className="relative h-4 w-5">
                  <motion.span
                    className="absolute left-0 top-0 h-0.5 w-5 bg-[#1A1D20]"
                    animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-[7px] h-0.5 w-5 bg-[#1A1D20]"
                    animate={{ opacity: open ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-[14px] h-0.5 w-5 bg-[#1A1D20]"
                    animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                    transition={{ duration: 0.3 }}
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
            className="fixed inset-0 z-[65] bg-[#FAF8F5]/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x flex min-h-screen flex-col items-center justify-center gap-6 pt-16 pb-20">
              <div className="text-center">
                <span className="font-display text-3xl font-bold text-[#1A1D20]">Yashika S.</span>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#8C6D34] uppercase mt-1">
                  MBA HR @ VESIM '27
                </p>
              </div>

              <div className="w-12 h-0.5 bg-[#B8975B]/30" />

              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className="font-display text-2xl font-bold tracking-wide text-[#1A1D20] hover:text-[#8C6D34] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 flex flex-col items-center gap-3 w-full max-w-xs">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost w-full justify-center text-sm"
                >
                  LinkedIn Profile
                </a>
                <Link to="/resume" className="btn-primary w-full justify-center text-sm">
                  View Resume
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs text-[#786E63] underline mt-2"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
