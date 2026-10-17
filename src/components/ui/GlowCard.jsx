import { cn } from "../../utils/cn";

export default function GlowCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
