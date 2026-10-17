import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#FAF8F5]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-md px-10 text-center">
            <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,151,91,0.22),transparent_55%)] blur-3xl" />
            <div className="relative">
              <div className="font-display text-4xl font-bold tracking-tight text-[#1A1D20]">
                Yashika S.
              </div>
              <div className="mt-2 text-xs font-semibold tracking-[0.25em] text-[#8C6D34] uppercase">
                MBA HR • TALENT ACQUISITION • VESIM '27
              </div>

              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-[#B8975B]/20">
                <motion.div
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#8C6D34] to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: "220%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                className="mt-6 text-xs text-[#786E63]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Loading portfolio experience…
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
