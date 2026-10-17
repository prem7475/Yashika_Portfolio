import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setOpen(false), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-sm px-6 text-center">
            <div className="font-display text-3xl font-bold tracking-tight text-slate-900">
              Yashika S.
            </div>
            <div className="mt-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              MBA HR • TALENT ACQUISITION • VESIM '27
            </div>

            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full w-1/2 bg-blue-600 rounded-full"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
