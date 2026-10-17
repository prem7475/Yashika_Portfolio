import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          {eyebrow}
        </div>
      ) : null}
      <motion.h2
        className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
