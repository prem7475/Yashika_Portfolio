import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import fallbackPortrait from "../../assets/portrait.svg";
import { cn } from "../../utils/cn";

const sizeMap = {
  sm: "h-36 w-36",
  md: "h-52 w-52",
  lg: "h-72 w-72 sm:h-80 sm:w-80",
};

export default function ProfilePortrait({
  className,
  size = "lg",
  src = "/profile-hero.jpg",
  label = "MBA HR @ VESIM '27",
}) {
  const classes = useMemo(() => sizeMap[size] ?? sizeMap.lg, [size]);
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className={cn("relative grid place-items-center", classes, className)}>
      <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,151,91,0.22),transparent_70%)] blur-2xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4B87C] via-[#B8975B] to-[#8C6D34] p-[3px] shadow-lg" />

      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white bg-white shadow-xl">
        <img
          src={imgSrc}
          alt="Yashika S."
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          onError={() => setImgSrc(fallbackPortrait)}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
      </div>

      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#B8975B]/30 bg-white/95 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#8C6D34] shadow-md backdrop-blur-md uppercase"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
    </div>
  );
}
