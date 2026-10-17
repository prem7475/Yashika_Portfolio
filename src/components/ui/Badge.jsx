import { cn } from "../../utils/cn";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-0.5 text-[11px] font-semibold tracking-wider text-slate-700 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
