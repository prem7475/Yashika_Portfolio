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
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src={imgSrc}
          alt="Yashika S."
          className="h-full w-full object-cover object-center"
          onError={() => setImgSrc(fallbackPortrait)}
          loading="eager"
        />
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm uppercase">
        {label}
      </div>
    </div>
  );
}
