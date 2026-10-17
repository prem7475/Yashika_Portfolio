import { Link } from "react-router-dom";
import PageShell from "../components/ui/PageShell";

export default function NotFound() {
  return (
    <PageShell className="pt-28 pb-20">
      <div className="container-x">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">404 — NOT FOUND</div>
          <h1 className="mt-2 font-display text-3xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
            The requested page does not exist or has been moved.
          </p>
          <Link to="/" className="btn-primary mt-6 text-xs" data-cursor="hover">
            ← Back to Home
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
