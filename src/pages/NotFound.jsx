import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";

export default function NotFound() {
  return (
    <PageShell className="pt-32 pb-24">
      <div className="container-x">
        <div className="rounded-3xl border border-[#B8975B]/25 bg-white p-10 shadow-lg">
          <div className="text-xs font-bold tracking-[0.25em] text-[#8C6D34] uppercase">404 — NOT FOUND</div>
          <h1 className="mt-2 font-display text-4xl font-bold text-[#1A1D20]">
            Page Not Found
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#505765]">
            The requested page does not exist or has been moved.
          </p>
          <Link to="/" className="btn-primary mt-8 text-xs" data-cursor="hover">
            ← Back to Home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
