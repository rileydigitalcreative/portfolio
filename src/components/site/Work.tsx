import { Link } from "@tanstack/react-router";
import type { CaseStudy, Status } from "@/content/site";

export function StatusTag({ s }: { s: Status }) {
  const label = s === "To confirm" ? "Status to confirm" : s;
  const tone = s === "Completed" ? "bg-foreground text-background" : s === "In Progress" ? "bg-blush" : "border border-dashed border-rose text-muted-foreground";
  return <span className={`eyebrow inline-block rounded-full px-3 py-1 ${tone}`}>{label}</span>;
}

/** Clearly labeled stand-in for a missing work asset. */
export function AssetPlaceholder({ label, className = "aspect-[4/3]" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder: ${label}`} className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-rose bg-card p-6 text-center ${className}`}>
      <span className="eyebrow text-rose">Placeholder</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function ProjectCard({ p, index, ratio = "aspect-[4/3]", big }: { p: CaseStudy; index: number; ratio?: string; big?: boolean }) {
  return (
    <Link to="/work/$slug" params={{ slug: p.slug }} className="group block h-full">
      <div className={`relative flex overflow-hidden rounded-lg bg-card ${ratio}`}>
        <div className="absolute inset-0 flex flex-col justify-between p-6 transition-transform duration-700 group-hover:scale-[1.02] md:p-8">
          <span className="eyebrow text-rose">{String(index + 1).padStart(2, "0")}</span>
          <span className={`font-display text-blush ${big ? "text-6xl md:text-8xl" : "text-5xl md:text-6xl"}`}>{p.title}</span>
          <span className="eyebrow text-muted-foreground">Project imagery to be added</span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t pt-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-rose">{p.type}</span>
            {p.status === "In Progress" && <StatusTag s={p.status} />}
          </div>
          <h3 className="font-display mt-2 text-2xl md:text-3xl">{p.title}</h3>
          <p className="mt-2 max-w-xl text-charcoal">{p.summary}</p>
        </div>
        <span className="eyebrow whitespace-nowrap pt-1 transition-transform group-hover:translate-x-1">View →</span>
      </div>
    </Link>
  );
}
