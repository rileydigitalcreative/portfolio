import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/Work";
import { caseStudies } from "@/content/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Riley Hammond" },
      { name: "description", content: "UX/UI, emerging technology, mobile apps, and social media campaign work by Riley Hammond." },
      { property: "og:title", content: "Selected Work — Riley Hammond" },
      { property: "og:description", content: "Case studies across design, technology, and marketing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const ratios = ["aspect-[4/3]", "aspect-[4/3] md:aspect-[4/5]", "aspect-[4/5]", "aspect-[4/3]"];
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

function WorkPage() {
  return (
    <Page>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display animate-rise text-7xl uppercase md:text-9xl">Work</h1>
        <p className="font-script animate-ink mt-1 text-4xl text-charcoal">selected projects</p>
        <p className="mt-8 max-w-2xl text-lg text-charcoal">Projects that combine research, strategy, visual design, and technology. Imagery is being added — placeholders are labeled.</p>
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-12">
          {caseStudies.map((p, i) => (
            <Reveal key={p.slug} className={spans[i % 4] ?? ""}>
              <ProjectCard p={p} index={i} ratio={ratios[i % 4] ?? "aspect-[4/3]"} />
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.categories.map((c) => <li key={c} className="rounded-full border px-3 py-1 text-xs">{c}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}
